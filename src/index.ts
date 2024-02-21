import fs from 'node:fs'
import fsp from 'node:fs/promises'
import path from 'node:path'
import micromatch from 'micromatch'
import { Pattern, createCwds, isMatch } from './utils'

export interface Options {
  cwd?: string
  ignore?: string[]
  absolute?: boolean
  dot?: boolean
  followSymbolicLinks?: boolean
  onlyFiles?: boolean
}

export async function glob(pattern: string | string[], options: Options = {}) {
  const {
    cwd: root = '.',
    ignore = [],
    absolute = false,
    dot = false,
    followSymbolicLinks = true,
    onlyFiles = true,
  } = options
  const result: string[] = []
  const cwds = Object.entries(
    createCwds(root, typeof pattern === 'string' ? [pattern] : pattern),
  )

  function insert(patternPath: string, patterns: Pattern[]) {
    for (const { glob, base, prefix } of patterns) {
      if (isMatch(patternPath, glob, dot)) {
        const suffix = path.join(base, patternPath)
        result.push(prefix + suffix)
      }
    }
  }
  await Promise.all(
    cwds.map(async ([_cwd, _pattern]) => {
      const initDirs = await fsp.readdir(_cwd, {
        withFileTypes: true,
      })
      await _glob(_cwd, '.', initDirs, _pattern)
    }),
  ).catch((err) => {})

  async function _glob(
    p: string,
    cwd: string,
    dirs: fs.Dirent[],
    pattern: Pattern[],
  ) {
    if (micromatch.isMatch(p, ignore, { dot })) {
      return
    }
    await Promise.all(
      dirs.map(async (item) => {
        const name = item.name
        const patternPath = path.join(cwd, name)
        if (!dot && name[0] === '.') {
          return
        }
        if (item.isFile()) {
          insert(patternPath, pattern)
          return
        }
        if (
          item.isDirectory() ||
          (followSymbolicLinks && item.isSymbolicLink())
        ) {
          if (!onlyFiles) {
            insert(patternPath, pattern)
          }
          const fullPath = path.join(p, name)
          const newDirs = await fsp.readdir(fullPath, {
            withFileTypes: true,
          })

          await _glob(fullPath, patternPath, newDirs, pattern)
        }
      }),
    )
  }

  const joinCwd = path.join(process.cwd(), root)
  return absolute ? result.map((item) => path.join(joinCwd, item)) : result
}

// FIXME: node 20.x do not support unicode
export function isLegalPath(str: string) {
  for (const ch of str) {
    if (ch.length > 1) {
      return false
    }
  }
  return true
}

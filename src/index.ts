import fsp from 'node:fs/promises'
import path from 'node:path'
import { Dirent } from 'node:fs'
import micromatch from 'micromatch'
import { Pattern, createCwds, isMatch, joinSlash } from './utils'

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
  const isIgnoreDot = dot ? () => false : (name: string) => name[0] === '.'
  const isIgnoreSymbolicLink = followSymbolicLinks
    ? (item: Dirent) => item.isSymbolicLink()
    : () => false
  const shouldInsertDir = onlyFiles
    ? () => false
    : (p: string, pattern: Pattern) => insert(p, pattern)

  function insert(p: string, patterns: Pattern, isFile = false) {
    const { base, prefix, globs } = patterns
    for (const glob of globs) {
      if (isMatch(p, glob, dot, isFile)) {
        const suffix = base ? path.join(base, p) : p
        result.push(prefix + suffix)
      }
    }
  }

  await Promise.all(
    cwds.map(async ([cwd, pattern]) => {
      await _glob(cwd, '.', pattern)
    }),
  ).catch((err) => {})

  async function _glob(p: string, cwd: string, pattern: Pattern) {
    if (micromatch.isMatch(p, ignore, { dot })) {
      return
    }
    const dirs = await fsp.readdir(p, {
      withFileTypes: true,
    })
    await Promise.all(
      dirs.map(async (dir) => {
        const name = dir.name
        if (isIgnoreDot(name)) {
          return
        }
        const patternPath = joinSlash(cwd, name)
        if (dir.isFile()) {
          insert(patternPath, pattern, true)
          return
        }
        if (dir.isDirectory() || isIgnoreSymbolicLink(dir)) {
          const fullPath = joinSlash(p, name)
          shouldInsertDir(patternPath, pattern)
          await _glob(fullPath, patternPath, pattern)
        }
      }),
    )
  }
  if (absolute) {
    const joinCwd = path.join(process.cwd(), root)
    return result.map((item) => path.join(joinCwd, item))
  }
  return result
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

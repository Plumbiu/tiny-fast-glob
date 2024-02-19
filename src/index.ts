import fs from 'node:fs'
import fsp from 'node:fs/promises'
import path from 'node:path'
import micromatch from 'micromatch'
import { Pattern, createCwds, isLegalPath } from './utils'

interface Options {
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
    followSymbolicLinks = false,
    onlyFiles = true,
  } = options

  if (!isLegalPath(root)) {
    return []
  }
  const result: string[] = []
  const cwds = Object.entries(
    createCwds(root, typeof pattern === 'string' ? [pattern] : pattern),
  )
  const shouldIgnore =
    ignore.length > 0 ? (p: string) => match(p, ignore) : () => false

  function match(p: string, pat: string | string[]) {
    return micromatch.isMatch(p, pat, {
      dot,
    })
  }

  function updateResult(patternPath: string, patterns: Pattern[]) {
    for (const { glob, base, prefix } of patterns) {
      if (match(patternPath, glob)) {
        const suffix = path.join(base, patternPath)
        result.push(prefix ? prefix + suffix : suffix)
      }
    }
  }

  await Promise.all(
    cwds.map(async ([_cwd, _pattern]) => {
      try {
        await _glob(
          _cwd,
          _cwd,
          await fsp.readdir(_cwd, {
            withFileTypes: true,
          }),
          _pattern,
        )
      } catch (error) {}
    }),
  )

  async function _glob(
    p: string,
    cwd: string,
    dirs: fs.Dirent[],
    pattern: Pattern[],
  ) {
    await Promise.all(
      dirs.map(async (item) => {
        if ((!dot && item.name[0] === '.') || !isLegalPath(item.name)) {
          return
        }

        const fullPath = path.join(p, item.name)
        const patternPath = path.relative(cwd, fullPath)

        if (item.isFile()) {
          updateResult(patternPath, pattern)
        } else if (
          item.isDirectory() ||
          (followSymbolicLinks && item.isSymbolicLink())
        ) {
          if (!shouldIgnore(patternPath)) {
            if (!onlyFiles) {
              updateResult(patternPath, pattern)
            }
            try {
              const newDirs = await fsp.readdir(fullPath, {
                withFileTypes: true,
              })
              await _glob(fullPath, cwd, newDirs, pattern)
            } catch (error) {}
          }
        }
      }),
    ).catch((err) => {})
  }

  return absolute
    ? result.map((item) => path.join(root === '.' ? process.cwd() : root, item))
    : result
}

import fs from 'node:fs'
import fsp from 'node:fs/promises'
import path from 'node:path'
import micromatch from 'micromatch'

interface Options {
  cwd?: string
  ignore?: string[]
  absolute?: boolean
  dot?: boolean
  followSymbolicLinks?: boolean
  onlyFiles?: boolean
}

function isLegalPath(str: string) {
  for (const ch of str) {
    if (ch.length > 1) {
      return false
    }
  }
  return true
}

export async function glob(_pattern: string | string[], options: Options = {}) {
  const {
    cwd = '.',
    ignore = [],
    absolute = false,
    dot = false,
    followSymbolicLinks = false,
    onlyFiles = true,
  } = options

  if (!isLegalPath(cwd)) {
    return []
  }

  const judgeIgnore =
    ignore.length > 0 ? (p: string) => match(p, ignore) : () => false
  const result: string[] = []
  const patterns = (typeof _pattern === 'string' ? [_pattern] : _pattern).map(
    (pattern) => ({
      pattern,
      isAbsolute: pattern[0] === '.' && pattern[1] === '/',
    }),
  )

  try {
    const root = fs.readdirSync(cwd, {
      withFileTypes: true,
    })
    await _glob(cwd, root)
  } catch (error) {}

  function match(p: string, pat: string | string[]) {
    return micromatch.isMatch(p, pat, {
      dot,
    })
  }

  function updateResult(p: string) {
    for (const { pattern, isAbsolute } of patterns) {
      if (match(p, pattern)) {
        if (isAbsolute) {
          result.push('./' + p)
        } else {
          result.push(p)
        }
      }
    }
  }

  async function _glob(p: string, dirs: fs.Dirent[]) {
    await Promise.all(
      dirs.map(async (item) => {
        if (!dot && item.name[0] === '.') {
          return
        }
        if (!isLegalPath(item.name)) {
          return
        }
        const full = path.join(p, item.name)
        const patternPath = path.relative(cwd, full)

        if (
          item.isDirectory() ||
          (followSymbolicLinks && item.isSymbolicLink())
        ) {
          if (!judgeIgnore(patternPath)) {
            if (!onlyFiles) {
              updateResult(patternPath)
            }
            try {
              const newDirs = await fsp.readdir(full, {
                withFileTypes: true,
              })
              await _glob(full, newDirs)
            } catch (error) {}
          }
        } else if (item.isFile()) {
          updateResult(patternPath)
        }
      }),
    ).catch((err) => {})
  }

  return absolute
    ? result.map((item) => path.join(process.cwd(), item))
    : result
}

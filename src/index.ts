import fs from 'node:fs'
import fsp from 'node:fs/promises'
import path from 'node:path'
import match from 'micromatch'

interface Options {
  cwd?: string
  ignore?: string[]
  absolute?: boolean
  dot?: boolean
  followSymbolicLinks?: boolean
  onlyFiles?: boolean
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
  const root = await fsp.readdir(cwd, { withFileTypes: true })
  const judgeIgnore =
    ignore.length > 0 ? (p: string) => m(p, ignore) : () => false
  const result: string[] = []
  const patterns = (typeof _pattern === 'string' ? [_pattern] : _pattern).map(
    (item) => {
      if (item[0] === '.' && item[1] === '/') {
        return {
          pattern: item,
          startsAbsolte: true,
        }
      }
      return {
        pattern: item,
        startsAbsolte: false,
      }
    },
  )

  await _glob(cwd, root)

  function m(p: string, pat: string | string[]) {
    return match.isMatch(p, pat, {
      dot,
    })
  }

  function updateResult(p: string) {
    for (const { pattern, startsAbsolte } of patterns) {
      if (m(p, pattern)) {
        if (startsAbsolte) {
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
            const newDirs = await fsp.readdir(full, {
              withFileTypes: true,
            })

            await _glob(full, newDirs)
          } else {
          }
        } else if (item.isFile()) {
          updateResult(patternPath)
        }
      }),
    )
  }

  return absolute
    ? result.map((item) => path.join(process.cwd(), item))
    : result
}

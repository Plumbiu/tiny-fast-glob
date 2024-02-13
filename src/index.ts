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

export async function glob(pattern: string | string[], options: Options = {}) {
  const {
    cwd = '.',
    ignore = [],
    absolute = false,
    dot = false,
    followSymbolicLinks = false,
    onlyFiles = true,
  } = options
  const result: string[] = []
  try {
    const root = await fsp.readdir(cwd, { withFileTypes: true })
    await _glob(cwd, root)
  } catch (error) {
    return []
  }

  async function _glob(p: string, dirs: fs.Dirent[]) {
    await Promise.all(
      dirs.map(async (item) => {
        if (!dot && item.name[0] === '.') {
          return
        }
        const full = path.join(p, item.name)
        if (
          item.isDirectory() ||
          (followSymbolicLinks && item.isSymbolicLink())
        ) {
          if (!match.isMatch(full, ignore)) {
            if (
              !onlyFiles &&
              match.isMatch(full, pattern, {
                dot,
              })
            ) {
              result.push(full)
            }
            try {
              const newDirs = await fsp.readdir(full, {
                withFileTypes: true,
              })
              await _glob(full, newDirs)
            } catch (error) {}
          }
        } else if (
          match.isMatch(full, pattern, {
            dot,
          })
        ) {
          result.push(full)
        }
      }),
    )
  }

  return absolute
    ? result.map((item) => path.join(process.cwd(), item))
    : result
}

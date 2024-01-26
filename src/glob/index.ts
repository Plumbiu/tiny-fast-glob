import fs from 'node:fs'
import fsp from 'node:fs/promises'
import path from 'node:path'
import match from 'micromatch'

interface Options {
  cwd?: string
  ignore?: string[]
  absolute?: boolean
  dot?: boolean
}

export function globSync(pattern: string, options: Options = {}) {
  const {
    cwd = process.cwd(),
    ignore = [],
    absolute = false,
    dot = false,
  } = options
  const result: string[] = []
  const root = fs.readdirSync(cwd, { withFileTypes: true })
  _glob(cwd, root)

  function _glob(p: string, dirs: fs.Dirent[]) {
    for (const item of dirs) {
      if (!dot && item.name[0] === '.') {
        continue
      }
      const full = path.join(p, item.name)
      if (item.isDirectory()) {
        if (!match.isMatch(full, ignore)) {
          const newDirs = fs.readdirSync(full, {
            withFileTypes: true,
          })
          _glob(full, newDirs)
        }
      } else if (match.isMatch(item.name, pattern)) {
        result.push(full)
      }
    }
  }

  return absolute ? result : result.map((item) => path.relative(cwd, item))
}

export async function glob(pattern: string, options: Options = {}) {
  const {
    cwd = process.cwd(),
    ignore = [],
    absolute = false,
    dot = false,
  } = options
  const result: string[] = []
  const root = await fsp.readdir(cwd, { withFileTypes: true })
  await _glob(cwd, root)

  async function _glob(p: string, dirs: fs.Dirent[]) {
    await Promise.all(
      dirs.map(async (item) => {
        if (!dot && item.name[0] === '.') {
          return
        }
        const full = path.join(p, item.name)
        if (item.isDirectory()) {
          if (!match.isMatch(full, ignore)) {
            const newDirs = await fsp.readdir(full, {
              withFileTypes: true,
            })
            await _glob(full, newDirs)
          }
        } else if (match.isMatch(item.name, pattern)) {
          result.push(full)
        }
      }),
    )
  }
  return absolute ? result : result.map((item) => path.relative(cwd, item))
}

/* eslint-disable @stylistic/implicit-arrow-linebreak */
import fs from 'node:fs'
import path from 'node:path'
import match from 'micromatch'

interface Options {
  cwd?: string
  ignore?: string[]
  absolute?: boolean
  dot?: boolean
}

export function glob(pattern: string, options: Options = {}) {
  const { cwd = '', ignore = [], dot = true, absolute = false } = options
  const result: string[] = []
  const root = fs.readdirSync(cwd, { withFileTypes: true })
  const stack: fs.Dirent[] = root.filter(
    (item) => !item.name.includes('.') || item.isFile(),
  )

  while (stack.length > 0) {
    const p = stack.shift()
    if (!p) {
      return
    }
    if (p.path.includes('.')) {
      continue
    }
    const full = path.join(p.path, p.name)
    if (p.isDirectory()) {
      if (!match.isMatch(full, ignore)) {
        const dirs = fs.readdirSync(full, {
          withFileTypes: true,
        })
        stack.push(...dirs)
      }
    } else if (
      match.isMatch(full, pattern, {
        dot,
      })
    ) {
      result.push(full)
    }
  }

  return absolute ? result : result.map((item) => path.relative(cwd, item))
}

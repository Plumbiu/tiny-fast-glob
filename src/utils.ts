import path from 'node:path'
import micromatch from 'micromatch'

export function isLegalPath(str: string) {
  for (const ch of str) {
    if (ch.length > 1) {
      return false
    }
  }
  return true
}

function isAbsolutePath(p: string) {
  return p[0] === '.' && p[1] === '/'
}

export interface Pattern {
  base: string
  glob: string
}

export type Result = Record<string, Pattern[]>

export function createCwds(cwd: string, patterns: string[]) {
  const result: Result = {}
  for (const pattern of patterns) {
    const { base, glob } = micromatch.scan(pattern)
    const key = base ? path.join(cwd, base) : cwd
    if (!result[key]) {
      result[key] = []
    }
    result[key].push({
      base,
      glob: isAbsolutePath(pattern) ? './' + glob : glob,
    })
  }
  return result
}

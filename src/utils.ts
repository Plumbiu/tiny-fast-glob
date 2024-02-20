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

export interface Pattern {
  base: string
  glob: string
  prefix: string
}

export type Result = Record<string, Pattern[]>

export function createCwds(cwd: string, patterns: string[]) {
  const result: Result = {}
  for (const pattern of patterns) {
    const { base, glob, prefix } = micromatch.scan(pattern, {
      unescape: true,
    })
    const key = base ? path.join(cwd, base) : cwd
    if (!result[key]) {
      result[key] = []
    }
    result[key].push({
      base,
      prefix,
      glob,
    })
  }
  return result
}

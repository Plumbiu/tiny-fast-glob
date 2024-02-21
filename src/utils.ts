import path from 'node:path'
import micromatch from 'micromatch'

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

const SIMPLE_GLOB = '**/*.'
const SIMPLE_GLOB_LENGTH = 4
export function isSimpleGlob(pattern: string) {
  return pattern.startsWith(SIMPLE_GLOB)
}

export function isMatch(p: string, pattern: string, dot: boolean) {
  if (pattern === '**/*' || pattern === '**') {
    return true
  }
  if (isSimpleGlob(pattern)) {
    return p.endsWith(pattern.slice(SIMPLE_GLOB_LENGTH))
  }
  return micromatch.isMatch(p, pattern, {
    dot,
  })
}

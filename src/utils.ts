import path from 'node:path'
import micromatch from 'micromatch'

export interface Pattern {
  base: string
  globs: string[]
  prefix: string
}

export type Result = Record<string, Pattern>

export function createCwds(cwd: string, patterns: string[]) {
  const result: Result = {}
  for (const pattern of patterns) {
    const { base, glob, prefix } = micromatch.scan(pattern, {
      unescape: true,
    })
    const key = base && cwd !== '.' ? path.join(cwd, base) : cwd
    if (!result[key]) {
      result[key] = {
        base,
        prefix,
        globs: [],
      }
    }
    result[key].globs.push(glob)
  }
  return result
}

const SIMPLE_GLOB = '**/*.'
const SIMPLE_GLOB_LENGTH = 4
export function isSimpleGlob(pattern: string) {
  for (let i = 0; i <= SIMPLE_GLOB_LENGTH; i++) {
    if (pattern[i] !== SIMPLE_GLOB[i]) {
      return false
    }
  }
  return true
}

export function isMatch(
  p: string,
  pattern: string,
  dot: boolean,
  isFile: boolean,
) {
  if (pattern === '**/*' || pattern === '**') {
    return true
  }
  if (isFile && isSimpleGlob(pattern)) {
    return p.endsWith(pattern.slice(SIMPLE_GLOB_LENGTH))
  }
  return micromatch.isMatch(p, pattern, {
    dot,
  })
}

import { expect, test } from 'vitest'
import { Result, createCwds } from './utils'
import { slash } from 'test/utils'

function f(cwd: string, patterns: string[]) {
  const result: Result = {}
  for (const [key, value] of Object.entries(createCwds(cwd, patterns))) {
    result[slash(key)] = value
  }
  return result
}

test('createCwds', () => {
  let cwd = 'src/test'
  let patterns = ['hello/**/*.js', '**/*.ts', 'hello/**/*.ts']
  expect(f(cwd, patterns)).toEqual({
    'src/test/hello': [
      { base: 'hello', glob: '**/*.js', prefix: '' },
      { base: 'hello', glob: '**/*.ts', prefix: '' },
    ],
    'src/test': [{ base: '', glob: '**/*.ts', prefix: '' }],
  })
})

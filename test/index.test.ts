import path from 'node:path'
import { expect, test } from 'vitest'
import { glob as fast_glob } from 'fast-glob'
import { glob as tiny_fast_glob } from '../src/glob/index'

test('equal with fast-glob', async () => {
  const r1 = await fast_glob('**/*.ts', {
    ignore: ['**/node_modules'],
    absolute: false,
  })
  const r2 = await tiny_fast_glob('**/*.ts', {
    ignore: ['**/node_modules'],
    absolute: false,
  })

  expect(r2.sort()).toEqual(r1.map((p) => path.normalize(p)).sort())
})

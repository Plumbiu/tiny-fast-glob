import path from 'node:path'
import { expect, test } from 'vitest'
import { globSync as fast_glob } from 'fast-glob'
import { globSync as tiny_fast_glob } from '../src/glob/index'

test('equal with fast-glob', () => {
  const r1 = fast_glob('**/*.ts', {
    ignore: ['**/node_modules'],
    absolute: true,
  })
  const r2 = tiny_fast_glob('**/*.ts', {
    ignore: ['**/node_modules'],
    absolute: true,
  })

  expect(r2.sort()).toEqual(r1.map((p) => path.normalize(p)).sort())
})

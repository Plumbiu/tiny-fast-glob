import { bench } from 'vitest'
import { globSync as fast_glob } from 'fast-glob'
import { glob as tiny_fast_glob } from 'tiny-fast-glob'

bench(
  'fast-glob',
  () => {
    fast_glob('**/*.ts', {
      cwd: 'D:\\Code\\Project\\@plumbiu\\tiny-fast-glob',
      ignore: ['**/node_modules'],
      absolute: true,
    })
  },
  { time: 50 },
)
bench(
  'tiny-fast-glob',
  () => {
    tiny_fast_glob('**/*.ts', {
      cwd: 'D:\\Code\\Project\\@plumbiu\\tiny-fast-glob',
      ignore: ['**/node_modules'],
      absolute: true,
    })
  },
  { time: 50 },
)

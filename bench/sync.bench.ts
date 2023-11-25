import { bench } from 'vitest'
import { globSync as fast_glob } from 'fast-glob'
import { globSync as tiny_fast_glob } from 'tiny-fast-glob'

bench(
  'fast-glob',
  () => {
    fast_glob('**/*.ts', {
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
      ignore: ['**/node_modules'],
      absolute: true,
    })
  },
  { time: 50 },
)

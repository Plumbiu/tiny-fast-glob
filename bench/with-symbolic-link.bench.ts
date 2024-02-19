import { bench } from 'vitest'
import { glob as fast_glob } from 'fast-glob'
import { glob as tiny_fast_glob } from '../src/index'

bench(
  'fast-glob',
  async () => {
    await fast_glob('**/*.ts', {
      absolute: true,
    })
  },
  { time: 250 },
)

bench(
  'tiny-fast-glob',
  async () => {
    await tiny_fast_glob('**/*.ts', {
      absolute: true,
      onlyFiles: true,
      followSymbolicLinks: true,
    })
  },
  { time: 250 },
)

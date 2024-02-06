import { bench } from 'vitest'
import { glob as fast_glob } from 'fast-glob'
import tiny_glob from 'tiny-glob'
import { glob as tiny_fast_glob } from '../src/index'

bench(
  'fast-glob',
  async () => {
    await fast_glob('**/*.ts', {
      absolute: true,
      followSymbolicLinks: false,
    })
  },
  { time: 250 },
)
bench(
  'tiny-glob',
  async () => {
    await tiny_glob('**/*.ts', {
      absolute: true,
      filesOnly: true,
    })
  },
  { time: 250 },
)

bench(
  'tiny-fast-glob',
  async () => {
    await tiny_fast_glob('**/*.ts', {
      absolute: true,
    })
  },
  { time: 250 },
)

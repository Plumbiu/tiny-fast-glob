import { bench } from 'vitest'
import { glob as fast_glob } from 'fast-glob'
import { glob as tiny_fast_glob } from '../../src/index'

bench('fast-glob', async () => {
  await fast_glob('**/*.js', {
    absolute: true,
  })
})

bench('tiny-fast-glob', async () => {
  await tiny_fast_glob('**/*.js', {
    absolute: true,
    onlyFiles: true,
    followSymbolicLinks: true,
  })
})

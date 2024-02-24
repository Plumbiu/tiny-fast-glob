import fg from 'fast-glob'
import { bench } from 'vitest'
import { Options, glob as tfg } from '../src/index'

export function benches(p: string | string[], opts: Options = {}) {
  bench('fast-glob', async () => {
    await fg(p, opts)
  })

  bench('tiny-fast-glob', async () => {
    await tfg(p, opts)
  })
}

import { expect, test, describe } from 'vitest'
import fg from 'fast-glob'
import { Options, glob as tfg } from '../src/index'
import { diffSet } from './utils'

export async function fn(p: string | string[], opts: Options = {}) {
  const r1 = await fg(p, opts)
  const r2 = await tfg(p, opts)
  console.log({ r1, r2 })

  expect(diffSet(r1, r2)).toEqual([])
}

describe('options', () => {
  test('absolute', async () => {
    await fn('**/*.js', {
      absolute: true,
    })
  })

  test('cwd', async () => {
    await fn('**/*.ts', {
      cwd: 'src',
    })
  })

  test('followSymbolicLinks', async () => {
    await fn('**/*.js', {
      followSymbolicLinks: false,
    })
  })

  test('followSymbolicLinks', async () => {
    await fn('**/.gitignore', {})
  })

  test('filesOnly', async () => {
    await fn(['**/*.js', '**/@**'], {
      onlyFiles: false,
    })
  })

  test('dot', async () => {
    await fn('node_modules/**/*.js', {
      dot: true,
    })
  })
})

describe('path', () => {
  test('**', async () => {
    await fn('**')
  })

  test('**/*', async () => {
    await fn('**/*')
  })

  test('./', async () => {
    await fn(['./tsup/**/*.js', './eslint/**/*.js'])
  })

  test('**/* with ignore', async () => {
    await fn(['./tsup/**/*.js', './eslint/**/*.js'], {
      ignore: ['*eslint*', '@types/**/*', 'dist/**'],
    })
  })

  test('./ with cwd and absolute', async () => {
    await fn('./fast-glob/*', {
      cwd: 'node_modules',
    })
    await fn('./fast-glob/*', {
      cwd: 'node_modules',
      absolute: true,
    })
  })

  test('bracket', async () => {
    await fn('test/brackets \\(foo\\)/**/*.ts')
  })
})

describe('may bug', () => {
  test('unicode', async () => {
    await fn('test/**/*.ts')
  })
})

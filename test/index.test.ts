import { expect, test } from 'vitest'
import { glob as fast_glob } from 'fast-glob'
import { glob as tiny_fast_glob } from '../src/index'
import { slash } from './utils'

test('simple', async () => {
  const r1 = await fast_glob('src/**/*.ts', {
    followSymbolicLinks: false,
    absolute: true,
  })

  const r2 = await tiny_fast_glob('src/**/*.ts', {
    absolute: true,
  })

  expect(slash(r2.sort())).toEqual(r1.sort())
})

test('equal with fast-glob', async () => {
  const r1 = await fast_glob('**/*.js', {
    ignore: ['**/node_modules'],
    absolute: false,
  })
  const r2 = await tiny_fast_glob('**/*.js', {
    ignore: ['**/node_modules'],
    absolute: false,
  })

  expect(slash(r2.sort())).toEqual(r1.sort())
})

test('absolute-true', async () => {
  const r1 = await fast_glob('**/*.js', {
    followSymbolicLinks: false,
    absolute: true,
  })

  const r2 = await tiny_fast_glob('**/*.js', {
    absolute: true,
  })

  expect(slash(r2.sort())).toEqual(r1.sort())
})

test('cwd', async () => {
  const r1 = await fast_glob('**/*.js', {
    cwd: 'src',
    followSymbolicLinks: false,
    absolute: true,
  })

  const r2 = await tiny_fast_glob('**/*.js', {
    cwd: 'src',
    absolute: true,
  })

  expect(slash(r2.sort())).toEqual(r1.sort())
})

test('followSymbolicLinks', async () => {
  const r1 = await fast_glob('**/*.js', {
    cwd: 'src',
    absolute: true,
  })

  const r2 = await tiny_fast_glob('**/*.js', {
    cwd: 'src',
    absolute: true,
    followSymbolicLinks: true,
  })

  expect(slash(r2.sort())).toEqual(r1.sort())
})

test('followSymbolicLinks', async () => {
  const r1 = await fast_glob('**/*.js', {
    absolute: true,
  })

  const r2 = await tiny_fast_glob('**/*.js', {
    absolute: true,
    followSymbolicLinks: true,
  })

  expect(slash(r2.sort())).toEqual(r1.sort())
})

test('filesOnly', async () => {
  const r1 = await fast_glob(['**/*.js', '**/@**'], {
    absolute: true,
    onlyFiles: false,
  })

  const r2 = await tiny_fast_glob(['**/*.js', '**/@**'], {
    absolute: true,
    followSymbolicLinks: true,
    onlyFiles: false,
  })

  expect(slash(r2.sort())).toEqual(r1.sort())
})

test('dot', async () => {
  const r1 = await fast_glob('**/*.ts', {
    absolute: true,
    onlyFiles: false,
    dot: true,
  })

  const r2 = await tiny_fast_glob('**/*.ts', {
    absolute: true,
    followSymbolicLinks: true,
    onlyFiles: false,
    dot: true,
  })

  expect(slash(r2.sort())).toEqual(r1.sort())
})

test('**', async () => {
  const r1 = await fast_glob('**', {
    cwd: 'node_modules',
    followSymbolicLinks: false,
    onlyFiles: true,
  })

  const r2 = await tiny_fast_glob('**', {
    cwd: 'node_modules',
  })

  expect(slash(r2.sort())).toEqual(r1.sort())
})

test('**/*', async () => {
  const r1 = await fast_glob('**/*', {
    cwd: 'node_modules',
    followSymbolicLinks: false,
    onlyFiles: true,
  })

  const r2 = await tiny_fast_glob('**/*', {
    cwd: 'node_modules',
  })

  expect(slash(r2.sort())).toEqual(r1.sort())
})

test('./', async () => {
  const r1 = await fast_glob(['./tsup/**/*.js', './eslint/**/*.js'], {
    cwd: 'node_modules',
    onlyFiles: true,
  })

  const r2 = await tiny_fast_glob(['./tsup/**/*.js', './eslint/**/*.js'], {
    cwd: 'node_modules',
    followSymbolicLinks: true,
  })

  expect(slash(r2.sort())).toEqual(r1.sort())
})

test('unicode', async () => {
  const r1 = await fast_glob('test/**/*.ts', {
    onlyFiles: true,
  })

  const r2 = await tiny_fast_glob('test/**/*.ts', {
    followSymbolicLinks: true,
  })

  expect(slash(r2).sort()).toEqual(r1.sort())
})

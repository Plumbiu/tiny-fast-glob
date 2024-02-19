import { expect, test } from 'vitest'
import fast_glob from 'fast-glob'
import { glob as tiny_fast_glob } from '../src/index'
import { slashMap } from './utils'

test('simple', async () => {
  const r1 = await fast_glob('src/**/*.ts', {
    followSymbolicLinks: false,
    absolute: true,
  })

  const r2 = await tiny_fast_glob('src/**/*.ts', {
    absolute: true,
  })

  expect(slashMap(r2.sort())).toEqual(r1.sort())
})

test('absolute-true', async () => {
  const r1 = await fast_glob('**/*.js', {
    followSymbolicLinks: false,
    absolute: true,
  })

  const r2 = await tiny_fast_glob('**/*.js', {
    absolute: true,
  })

  expect(slashMap(r2.sort())).toEqual(r1.sort())
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

  expect(slashMap(r2.sort())).toEqual(r1.sort())
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

  expect(slashMap(r2.sort())).toEqual(r1.sort())
})

test('followSymbolicLinks', async () => {
  const r1 = await fast_glob('**/*.js', {
    absolute: true,
  })

  const r2 = await tiny_fast_glob('**/*.js', {
    absolute: true,
    followSymbolicLinks: true,
  })

  expect(slashMap(r2.sort())).toEqual(r1.sort())
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

  expect(slashMap(r2.sort())).toEqual(r1.sort())
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

  expect(slashMap(r2.sort())).toEqual(r1.sort())
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

  expect(slashMap(r2.sort())).toEqual(r1.sort())
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

  expect(slashMap(r2.sort())).toEqual(r1.sort())
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

  expect(slashMap(r2.sort())).toEqual(r1.sort())
})

test('unicode', async () => {
  const r1 = await fast_glob('test/**/*.ts', {
    onlyFiles: true,
  })

  const r2 = await tiny_fast_glob('test/**/*.ts', {
    followSymbolicLinks: true,
  })

  expect(slashMap(r2).sort()).toEqual(r1.sort())
})

test('**/* by ignore', async () => {
  const r1 = await fast_glob(['**/*.js', '**/*.ts'], {
    ignore: ['*eslint*', '@types/**/*', 'dist/**'],
    followSymbolicLinks: false,
    onlyFiles: true,
  })

  const r2 = await tiny_fast_glob(['**/*.js', '**/*.ts'], {
    ignore: ['*eslint*', '@types/**/*', 'dist/**'],
  })

  expect(slashMap(r2.sort())).toEqual(r1.sort())
})

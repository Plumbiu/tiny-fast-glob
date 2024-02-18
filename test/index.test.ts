import path from 'node:path'
import { expect, test } from 'vitest'
import { glob as fast_glob } from 'fast-glob'
import { glob as tiny_fast_glob } from '../src/index'

test('simple', async () => {
  const r1 = await fast_glob('src/**/*.ts', {
    followSymbolicLinks: false,
    absolute: true,
  })

  const r2 = await tiny_fast_glob('src/**/*.ts', {
    absolute: true,
  })

  expect(r2.sort()).toEqual(r1.map((p) => path.normalize(p)).sort())
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

  expect(r2.sort()).toEqual(r1.map((p) => path.normalize(p)).sort())
})

test('absolute-true', async () => {
  const r1 = await fast_glob('**/*.js', {
    followSymbolicLinks: false,
    absolute: true,
  })

  const r2 = await tiny_fast_glob('**/*.js', {
    absolute: true,
  })

  expect(r2.sort()).toEqual(r1.map((p) => path.normalize(p)).sort())
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

  expect(r2.sort()).toEqual(r1.map((p) => path.normalize(p)).sort())
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

  expect(r2.sort()).toEqual(r1.map((p) => path.normalize(p)).sort())
})

test('followSymbolicLinks', async () => {
  const r1 = await fast_glob('**/*.js', {
    absolute: true,
  })

  const r2 = await tiny_fast_glob('**/*.js', {
    absolute: true,
    followSymbolicLinks: true,
  })

  expect(r2.sort()).toEqual(r1.map((p) => path.normalize(p)).sort())
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

  expect(r2.sort()).toEqual(r1.map((p) => path.normalize(p)).sort())
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

  expect(r2.sort()).toEqual(r1.map((p) => path.normalize(p)).sort())
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

  expect(r2.sort()).toEqual(r1.map((p) => path.normalize(p)).sort())
})

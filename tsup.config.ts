import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  outDir: 'dist',
  splitting: true,
  clean: true,
  format: ['esm', 'cjs'],
  bundle: true,
  dts: true,
})

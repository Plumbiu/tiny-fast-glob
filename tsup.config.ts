import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['packages/core/src/index.ts'],
  outDir: 'packages/core/dist',
  splitting: true,
  clean: true,
  format: ['esm', 'cjs'],
  terserOptions: {
    compress: true,
  },
  bundle: true,
  minify: true,
  dts: true,
})

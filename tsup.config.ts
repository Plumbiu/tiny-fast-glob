import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  outDir: 'dist',
  splitting: true,
  clean: true,
  format: ['esm', 'cjs'],
  terserOptions: {
    compress: true,
  },
  bundle: true,
  minify: true,
  dts: true,
  sourcemap: true,
})

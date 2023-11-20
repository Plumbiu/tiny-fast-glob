# tiny-fast-glob

The simplest glob method implementation. 4x faster than fast-glob.

> only Support Node.js version > v20.1.0

# Feature

- ⚡️4x faster than fast-glob globSync method.
- 📦Super lightweight.

# Install

```bash
npm install tiny-fast-glob
```

# Benchmark

One of reason of `tiny-fast-glob` is faster is that it **doesn't fully support all `fast-glob` or `glob` options**.

```
RUN  v0.34.6 D:/Code/Project/@plumbiu/tiny-fast-glob

✓ bench/index.bench.ts (2) 314ms
    name                  hz     min     max    mean     p75     p99    p995    p999     rme  samples
  · fast-glob         783.90  1.1380  1.7471  1.2757  1.2921  1.7471  1.7471  1.7471  ±3.23%       40
  · tiny-fast-glob  6,230.52  0.1459  0.6256  0.1605  0.1594  0.2797  0.3346  0.6256  ±2.36%      312   fastest

BENCH  Summary

tiny-fast-glob - bench/index.bench.ts >
  7.95x faster than fast-glob
```

Currently supported options:

```ts
interface Options {
  /**
   * @default ''
   */
  cwd?: string
  /**
   * @default []
   */
  ignore?: string[]
  /**
   * @default false
   */
  absolute?: boolean
  /**
   * @default true
   */
  dot?: boolean
}
```

# Related projects

`tiny-fast-glob` is only support `glob` method yet, You might also be interested in these projects:

- [glob](https://github.com/isaacs/node-glob)
- [fast-glob](https://github.com/mrmlnc/fast-glob)

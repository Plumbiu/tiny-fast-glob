# tiny-fast-glob

The simplest glob method implementation. 4x faster than fast-glob.

# Feature

- ⚡️6x & 12x(sync) faster than fast-glob method.
- 📦Super lightweight.

# Install

```bash
npm install tiny-fast-glob
```

# Benchmark

One of reason of `tiny-fast-glob` is faster is that it **doesn't fully support all `fast-glob` or `glob` options**.

```
 ✓ bench/index.bench.ts (2) 725ms
     name                  hz     min     max    mean     p75     p99    p995    p999     rme  samples
   · fast-glob       1,154.11  0.5824  2.2308  0.8665  0.9322  1.6989  1.7703  2.2308  ±2.69%      289
   · tiny-fast-glob  7,433.92  0.0934  1.5194  0.1345  0.1382  0.5207  0.9593  1.3040  ±3.09%     1859   fastest
 ✓ bench/sync.bench.ts (2) 725ms
     name                  hz     min     max    mean     p75     p99    p995    p999     rme  samples
   · fast-glob         514.57  1.2824  3.5067  1.9434  2.0127  3.3144  3.5067  3.5067  ±2.46%      129
   · tiny-fast-glob  6,421.22  0.1056  1.5651  0.1557  0.1682  0.2887  0.3518  1.4108  ±2.43%     1606   fastest


 BENCH  Summary

  tiny-fast-glob - bench/index.bench.ts >
    6.44x faster than fast-glob

  tiny-fast-glob - bench/sync.bench.ts >
    12.48x faster than fast-glob
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

# tiny-fast-glob

The simplest glob method implementation. 4x faster than fast-glob.

# Feature

- ⚡️163x faster than fast-glob and 18x faster than tiny-glob
- 📦Super lightweight.

# Install

```bash
npm install tiny-fast-glob
```

# Benchmark

One of reason of `tiny-fast-glob` is faster is that it **doesn't fully support all `fast-glob` or `glob` options**.

```
     name                  hz      min      max     mean      p75      p99     p995     p999      rme  samples   
   · fast-glob        29.3216  28.2441  46.8544  34.1045  35.6849  46.8544  46.8544  46.8544  ±11.41%       10   slowest
   · tiny-glob         254.74   2.8719   8.0102   3.9255   4.1661   8.0102   8.0102   8.0102   ±7.05%       64   
   · tiny-fast-glob  4,790.79   0.1781   0.5550   0.2087   0.2075   0.4104   0.4621   0.5388   ±1.33%     1198   fastest
 ✓ bench/sync.bench.ts (2) 723ms
     name                  hz     min      max    mean     p75      p99     p995     p999      rme  samples      
   · fast-glob         162.02  3.0518  14.2443  6.1721  7.6617  14.2443  14.2443  14.2443  ±14.20%       41      
   · tiny-fast-glob  4,095.53  0.1575   1.3712  0.2442  0.2508   0.6482   1.1174   1.3439   ±2.96%     1024   fastest


 BENCH  Summary

  tiny-fast-glob - bench/index.bench.ts > 
    18.81x faster than tiny-glob
    163.39x faster than fast-glob

  tiny-fast-glob - bench/sync.bench.ts > 
    25.28x faster than fast-glob
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

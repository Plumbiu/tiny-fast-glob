# tiny-fast-glob

The simplest and fastest glob method implementation.

# Feature

- ⚡️Super fast
- 📦Super lightweight.

# Install

```bash
npm install tiny-fast-glob
```

# Usage

```ts
import { glob } from 'tiny-fast-glob'
await glob('**/*.js')

// Currently supported options:
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
   * @default false
   */
  dot?: boolean
  /**
   * @default false
   */
  followSymbolicLinks?: boolean
  /**
   * @default true
   */
  onlyFiles?: boolean
}
```

# Benchmark

One of reason of `tiny-fast-glob` is faster is that it **doesn't fully support all `fast-glob` or `glob` options**.

```
 ✓ bench/many-files/with-dir.bench.ts (2) 2309ms
     name                 hz     min      max     mean      p75      p99     p995     p999     rme  samples
   · fast-glob        9.1412  105.91   116.15   109.39   110.46   116.15   116.15   116.15  ±1.98%       10
   · tiny-fast-glob  89.4016  8.2681  17.2632  11.1855  11.7965  17.2632  17.2632  17.2632  ±4.92%       45   fastest
 ✓ bench/many-files/no-symbolic-links.bench.ts (2) 1282ms
     name                  hz      min      max     mean      p75      p99     p995     p999     rme  samples
   · fast-glob        48.4164  19.4610  23.1175  20.6542  21.0883  23.1175  23.1175  23.1175  ±1.80%       25
   · tiny-fast-glob  7,937.10   0.1019   0.6276   0.1260   0.1235   0.3005   0.3303   0.3952  ±0.95%     3969   fastest
 ✓ bench/simple-files.bench.ts (2) 1230ms
     name                   hz     min     max    mean     p75     p99    p995    p999     rme  samples
   · fast-glob       19,743.14  0.0318  5.1000  0.0507  0.0434  0.1925  0.2704  1.4889  ±3.74%     9872
   · tiny-fast-glob  40,862.72  0.0186  0.9387  0.0245  0.0229  0.0683  0.0991  0.2243  ±0.93%    20432   fastest
 ✓ bench/many-files/dot-true.bench.ts (2) 2383ms
     name                 hz      min      max     mean      p75      p99     p995     p999     rme  samples
   · fast-glob       11.3251  84.5286  92.6035  88.2992  89.3136  92.6035  92.6035  92.6035  ±2.12%       10
   · tiny-fast-glob  15.2834  63.1318  68.2986  65.4306  67.3197  68.2986  68.2986  68.2986  ±1.96%       10   fastest
 ✓ bench/many-files/with-symbolic-link.bench.ts (2) 2167ms
     name                hz      min     max    mean     p75     p99    p995    p999     rme  samples
   · fast-glob       9.8499  98.8772  106.43  101.52  102.25  106.43  106.43  106.43  ±1.93%       10
   · tiny-fast-glob  326.51   2.8072  3.7869  3.0627  3.1868  3.6230  3.7869  3.7869  ±0.95%      164   fastest


 BENCH  Summary

  tiny-fast-glob - bench/simple-files.bench.ts > 
    2.07x faster than fast-glob

  tiny-fast-glob - bench/many-files/dot-true.bench.ts > 
    1.35x faster than fast-glob

  tiny-fast-glob - bench/many-files/no-symbolic-links.bench.ts > 
    163.93x faster than fast-glob

  tiny-fast-glob - bench/many-files/with-dir.bench.ts > 
    9.78x faster than fast-glob

  tiny-fast-glob - bench/many-files/with-symbolic-link.bench.ts > 
    33.15x faster than fast-glob
```

# Related projects

- [glob](https://github.com/isaacs/node-glob)
- [fast-glob](https://github.com/mrmlnc/fast-glob)

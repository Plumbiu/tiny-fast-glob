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
 ✓ bench/many-files/with-dir.bench.ts (2) 1690ms
     name                 hz      min      max     mean      p75      p99     p995     p999     rme  samples
   · fast-glob       15.0728  64.3069  70.7023  66.3448  66.9531  70.7023  70.7023  70.7023  ±1.92%       10
   · tiny-fast-glob  92.4619   8.1706  16.8091  10.8153  11.1869  16.8091  16.8091  16.8091  ±5.42%       47   fastest
 ✓ bench/many-files/no-symbolic-links.bench.ts (2) 1254ms
     name                  hz      min      max     mean      p75      p99     p995     p999     rme  samples
   · fast-glob        57.0687  14.6083  24.9433  17.5227  18.3346  24.9433  24.9433  24.9433  ±5.20%       29
   · tiny-fast-glob  7,728.07   0.1013   0.5328   0.1294   0.1283   0.3153   0.3496   0.4545  ±0.95%     3865   fastest
 ✓ bench/many-files/dot-true.bench.ts (2) 2580ms
     name                 hz      min      max     mean      p75      p99     p995     p999     rme  samples
   · fast-glob       10.4417  90.1962   108.53  95.7699  96.0184   108.53   108.53   108.53  ±3.71%       10
   · tiny-fast-glob  13.9332  69.4049  74.5757  71.7710  73.2772  74.5757  74.5757  74.5757  ±1.85%       10   fastest
 ✓ bench/simple-files.bench.ts (2) 1229ms
     name                   hz     min     max    mean     p75     p99    p995    p999     rme  samples
   · fast-glob       18,320.68  0.0345  2.4417  0.0546  0.0482  0.1945  0.3071  1.3019  ±3.06%     9161
   · tiny-fast-glob  36,687.82  0.0233  0.4747  0.0273  0.0263  0.0652  0.0923  0.1793  ±0.60%    18344   fastest
 ✓ bench/many-files/with-symbolic-link.bench.ts (2) 1653ms
     name                 hz      min      max     mean      p75      p99     p995     p999     rme  samples
   · fast-glob       15.2344  60.9633  77.8937  65.6410  68.2515  77.8937  77.8937  77.8937  ±5.72%       10
   · tiny-fast-glob   400.31   2.1618   3.4705   2.4981   2.6389   3.1808   3.3810   3.4705  ±1.32%      201   fastest


 BENCH  Summary

  tiny-fast-glob - bench/simple-files.bench.ts > 
    2.00x faster than fast-glob

  tiny-fast-glob - bench/many-files/dot-true.bench.ts > 
    1.33x faster than fast-glob

  tiny-fast-glob - bench/many-files/no-symbolic-links.bench.ts > 
    135.42x faster than fast-glob

  tiny-fast-glob - bench/many-files/with-dir.bench.ts > 
    6.13x faster than fast-glob

  tiny-fast-glob - bench/many-files/with-symbolic-link.bench.ts > 
    26.28x faster than fast-glob
```

# Related projects

- [glob](https://github.com/isaacs/node-glob)
- [fast-glob](https://github.com/mrmlnc/fast-glob)

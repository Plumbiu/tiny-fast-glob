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
 ✓ bench/many-files/with-dir.bench.ts (2) 2307ms
     name                 hz     min      max     mean      p75      p99     p995     p999     rme  samples
   · fast-glob        9.1193  105.52   114.48   109.66   111.20   114.48   114.48   114.48  ±1.63%       10
   · tiny-fast-glob  91.9393  8.9340  16.6742  10.8767  11.3393  16.6742  16.6742  16.6742  ±3.34%       46   fastest
 ✓ bench/many-files/no-symbolic-links.bench.ts (2) 1276ms
     name                  hz      min      max     mean      p75      p99     p995     p999     rme  samples
   · fast-glob        50.6575  18.8943  21.7903  19.7404  20.1067  21.7903  21.7903  21.7903  ±1.57%       26
   · tiny-fast-glob  8,971.18   0.0979   0.5036   0.1115   0.1094   0.2184   0.2534   0.3221  ±0.56%     4486   fastest
 ✓ bench/simple-files.bench.ts (2) 1231ms
     name                   hz     min     max    mean     p75     p99    p995    p999     rme  samples
   · fast-glob       20,912.54  0.0319  2.6427  0.0478  0.0410  0.1708  0.2356  1.3560  ±3.33%    10457
   · tiny-fast-glob  41,119.32  0.0212  0.7079  0.0243  0.0229  0.0591  0.0852  0.1886  ±0.76%    20560   fastest
 ✓ bench/many-files/dot-true.bench.ts (2) 2336ms
     name                 hz      min      max     mean      p75      p99     p995     p999     rme  samples
   · fast-glob       11.2273  85.2024  94.3121  89.0687  91.2075  94.3121  94.3121  94.3121  ±2.27%       10
   · tiny-fast-glob  16.0929  59.9334  65.7812  62.1390  62.4588  65.7812  65.7812  65.7812  ±2.14%       10   fastest
 ✓ bench/many-files/with-symbolic-link.bench.ts (2) 2157ms
     name                 hz      min     max     mean     p75     p99    p995    p999     rme  samples
   · fast-glob       10.0220  98.1651  101.97  99.7802  100.88  101.97  101.97  101.97  ±0.97%       10
   · tiny-fast-glob   338.76   2.6391  3.7666   2.9520  3.0665  3.5458  3.7666  3.7666  ±1.05%      170   fastest


 BENCH  Summary

  tiny-fast-glob - bench/simple-files.bench.ts > 
    1.97x faster than fast-glob

  tiny-fast-glob - bench/many-files/dot-true.bench.ts > 
    1.43x faster than fast-glob

  tiny-fast-glob - bench/many-files/no-symbolic-links.bench.ts > 
    177.09x faster than fast-glob

  tiny-fast-glob - bench/many-files/with-dir.bench.ts > 
    10.08x faster than fast-glob

  tiny-fast-glob - bench/many-files/with-symbolic-link.bench.ts > 
    33.80x faster than fast-glob
```

# Related projects

- [glob](https://github.com/isaacs/node-glob)
- [fast-glob](https://github.com/mrmlnc/fast-glob)

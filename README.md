# tiny-fast-glob

The simplest and fastest glob method implementation.

# Feature

- ⚡️Super fast(at least 6x faster than `fast-glob`)
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
 ✓ bench/with-symbolic-link.bench.ts (2) 2309ms
     name                 hz      min      max     mean      p75      p99     p995     p999     rme  samples
   · fast-glob        8.5154   111.21   124.56   117.43   121.98   124.56   124.56   124.56  ±2.95%       10
   · tiny-fast-glob  77.6035  11.8175  14.2088  12.8860  13.1448  14.2088  14.2088  14.2088  ±2.42%       20   fastest
 ✓ bench/with-dir.bench.ts (2) 2452ms
     name                 hz      min      max     mean      p75      p99     p995     p999     rme  samples
   · fast-glob        7.9397   121.05   133.74   125.95   126.43   133.74   133.74   133.74  ±2.44%       10
   · tiny-fast-glob  49.9238  18.5472  21.7127  20.0305  20.9451  21.7127  21.7127  21.7127  ±3.20%       13   fastest
 ✓ bench/no-symbolic-links.bench.ts (2) 898ms
     name                  hz      min      max     mean      p75      p99     p995     p999      rme  samples
   · fast-glob        30.2680  27.5292  44.6901  33.0382  34.9941  44.6901  44.6901  44.6901  ±11.44%       10
   · tiny-fast-glob  2,724.10   0.2117   1.9347   0.3671   0.4122   1.1991   1.4486   1.9347   ±4.44%      682   fastest


 BENCH  Summary

  tiny-fast-glob - bench/no-symbolic-links.bench.ts > 
    90.00x faster than fast-glob

  tiny-fast-glob - bench/with-dir.bench.ts > 
    6.29x faster than fast-glob

  tiny-fast-glob - bench/with-symbolic-link.bench.ts > 
    9.11x faster than fast-glob
```

# Related projects

`tiny-fast-glob` is only support `glob` method yet, You might also be interested in these projects:

- [glob](https://github.com/isaacs/node-glob)
- [fast-glob](https://github.com/mrmlnc/fast-glob)

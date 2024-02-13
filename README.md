# tiny-fast-glob

The simplest and fastest glob method implementation.

# Feature

- ⚡️Super fast(at least 15x faster than `fast-glob`)
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
 ✓ bench/with-symbolic-link.bench.ts (2) 2282ms
     name                hz     min     max    mean     p75     p99    p995    p999     rme  samples
   · fast-glob       8.6630  107.76  128.51  115.43  119.22  128.51  128.51  128.51  ±4.19%       10
   · tiny-fast-glob  119.95  7.7636  9.4212  8.3367  8.5937  9.4212  9.4212  9.4212  ±1.74%       30   fastest
 ✓ bench/with-dir.bench.ts (2) 2396ms
     name                 hz      min      max     mean      p75      p99     p995     p999     rme  samples
   · fast-glob        8.2991   114.22   135.81   120.49   120.12   135.81   135.81   135.81  ±4.00%       10
   · tiny-fast-glob  62.6217  13.3837  22.0718  15.9689  16.2222  22.0718  22.0718  22.0718  ±9.39%       16   fastest      
 ✓ bench/no-symbolic-links.bench.ts (2) 935ms
     name                  hz      min      max     mean      p75      p99     p995     p999      rme  samples
   · fast-glob        28.1549  28.5152  44.2653  35.5177  37.9032  44.2653  44.2653  44.2653  ±11.03%       10
   · tiny-fast-glob  2,831.14   0.1840   2.0672   0.3532   0.4210   1.0305   1.3672   2.0672   ±4.36%      708   fastest    


 BENCH  Summary

  tiny-fast-glob - bench/no-symbolic-links.bench.ts > 
    100.56x faster than fast-glob

  tiny-fast-glob - bench/with-dir.bench.ts > 
    7.55x faster than fast-glob

  tiny-fast-glob - bench/with-symbolic-link.bench.ts > 
    13.85x faster than fast-glob
```

# Related projects

`tiny-fast-glob` is only support `glob` method yet, You might also be interested in these projects:

- [glob](https://github.com/isaacs/node-glob)
- [fast-glob](https://github.com/mrmlnc/fast-glob)

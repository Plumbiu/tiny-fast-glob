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
 ✓ bench/no-symbolic-links.bench.ts (3) 1263ms
     name                  hz      min      max     mean      p75      p99     p995     p999      rme  samples
   · fast-glob        30.2738  25.8322  41.9436  33.0319  36.6638  41.9436  41.9436  41.9436  ±10.80%       10   slowest
   · tiny-glob         123.60   3.7879  16.6107   8.0909  10.5703  16.6107  16.6107  16.6107  ±14.08%       31
   · tiny-fast-glob  2,442.43   0.1847   2.1506   0.4094   0.5230   1.3954   1.7333   2.1506   ±5.09%      612   fastest
 ✓ bench/with-symbolic-link.bench.ts (2) 2407ms
     name                hz     min     max    mean     p75     p99    p995    p999      rme  samples
   · fast-glob       7.8442  112.41  164.37  127.48  144.64  164.37  164.37  164.37  ±10.37%       10
   · tiny-fast-glob  125.08  7.6315  8.5867  7.9950  8.1491  8.5867  8.5867  8.5867   ±1.00%       32   fastest
 ✓ bench/with-dir.bench.ts (3) 2829ms
     name                hz     min     max    mean     p75     p99    p995    p999     rme  samples
   · fast-glob       7.6325  119.60  154.73  131.02  145.87  154.73  154.73  154.73  ±7.83%       10   slowest
   · tiny-glob       299.19  2.4323  5.1014  3.3423  3.7472  5.1014  5.1014  5.1014  ±4.09%       75   fastest
   · tiny-fast-glob  122.21  7.7736  8.8636  8.1825  8.2722  8.8636  8.8636  8.8636  ±0.97%       31


 BENCH  Summary

  tiny-fast-glob - bench/no-symbolic-links.bench.ts >
    19.76x faster than tiny-glob
    80.68x faster than fast-glob

  tiny-glob - bench/with-dir.bench.ts >
    2.45x faster than tiny-fast-glob
    39.20x faster than fast-glob

  tiny-fast-glob - bench/with-symbolic-link.bench.ts >
    15.95x faster than fast-glob
```

# Related projects

`tiny-fast-glob` is only support `glob` method yet, You might also be interested in these projects:

- [glob](https://github.com/isaacs/node-glob)
- [fast-glob](https://github.com/mrmlnc/fast-glob)

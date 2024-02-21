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
 ✓ bench/many-files/with-dir.bench.ts (2) 2472ms
     name                 hz      min      max     mean      p75      p99     p995     p999     rme  samples
   · fast-glob        8.2334   112.71   148.20   121.46   119.02   148.20   148.20   148.20  ±6.75%       10
   · tiny-fast-glob  73.1458  11.9536  18.4545  13.6713  14.4217  18.4545  18.4545  18.4545  ±3.79%       37   fastest
 ✓ bench/many-files/no-symbolic-links.bench.ts (2) 1311ms
     name                  hz      min      max     mean      p75      p99     p995     p999     rme  samples
   · fast-glob        38.3151  22.2032  32.8681  26.0994  27.1893  32.8681  32.8681  32.8681  ±5.30%       20
   · tiny-fast-glob  6,759.61   0.1289   1.4666   0.1479   0.1438   0.3014   0.3531   0.4199  ±0.90%     3380   fastest
 ✓ bench/simple-files.bench.ts (2) 1237ms
     name                   hz     min     max    mean     p75     p99    p995    p999     rme  samples
   · fast-glob       19,025.03  0.0332  6.1481  0.0526  0.0452  0.1917  0.2815  1.5762  ±4.24%     9513
   · tiny-fast-glob  36,049.34  0.0231  2.6264  0.0277  0.0260  0.0783  0.1192  0.3213  ±1.42%    18025   fastest
 ✓ bench/many-files/dot-true.bench.ts (2) 3873ms
     name                 hz      min     max     mean     p75     p99    p995    p999     rme  samples
   · fast-glob       10.0332  95.3182  105.04  99.6690  101.79  105.04  105.04  105.04  ±2.22%       10   fastest
   · tiny-fast-glob   6.5135   147.43  160.37   153.53  155.97  160.37  160.37  160.37  ±2.00%       10
 ✓ bench/many-files/with-symbolic-link.bench.ts (2) 2317ms
     name                hz     min     max    mean     p75     p99    p995    p999     rme  samples
   · fast-glob       9.0873  106.30  120.35  110.04  109.77  120.35  120.35  120.35  ±3.12%       10
   · tiny-fast-glob  189.93  4.7883  6.3498  5.2650  5.4883  6.3498  6.3498  6.3498  ±1.31%       95   fastest


 BENCH  Summary

  tiny-fast-glob - bench/simple-files.bench.ts >
    1.89x faster than fast-glob

  fast-glob - bench/many-files/dot-true.bench.ts >
    1.54x faster than tiny-fast-glob

  tiny-fast-glob - bench/many-files/no-symbolic-links.bench.ts >
    176.42x faster than fast-glob

  tiny-fast-glob - bench/many-files/with-dir.bench.ts >
    8.88x faster than fast-glob

  tiny-fast-glob - bench/many-files/with-symbolic-link.bench.ts >
    20.90x faster than fast-glob
```

# Related projects

- [glob](https://github.com/isaacs/node-glob)
- [fast-glob](https://github.com/mrmlnc/fast-glob)

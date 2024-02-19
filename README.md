# tiny-fast-glob

The simplest and fastest glob method implementation.

# Feature

- ⚡️Super fast(at least 2x faster than `fast-glob`)
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
 ✓ bench/many-files/with-dir.bench.ts (2) 3016ms
     name                 hz      min      max     mean      p75      p99     p995     p999     rme  samples
   · fast-glob        7.1604   126.76   170.53   139.66   151.27   170.53   170.53   170.53  ±7.18%       10
   · tiny-fast-glob  43.2160  21.4419  26.6688  23.1396  24.0599  26.6688  26.6688  26.6688  ±2.95%       22   fastest
 ✓ bench/many-files/with-symbolic-link.bench.ts (2) 2930ms
     name                 hz      min      max     mean      p75      p99     p995     p999     rme  samples
   · fast-glob        7.3811   119.63   153.88   135.48   141.92   153.88   153.88   153.88  ±6.09%       10
   · tiny-fast-glob  74.1397  12.0259  19.4056  13.4880  13.6743  19.4056  19.4056  19.4056  ±2.87%       38   fastest
 ✓ bench/simple-files.bench.ts (2) 1218ms
     name                  hz     min     max    mean     p75     p99    p995    p999     rme  samples
   · fast-glob       3,381.44  0.0542  3.6234  0.2957  0.3796  1.1355  1.5393  2.7584  ±3.84%     1691
   · tiny-fast-glob  8,816.74  0.0344  1.8515  0.1134  0.1213  0.4746  0.6317  1.2293  ±2.81%     4409   fastest
 ✓ bench/many-files/no-symbolic-links.bench.ts (2) 1407ms
     name                  hz      min      max     mean      p75      p99     p995     p999     rme  samples
   · fast-glob        24.3064  29.9841  52.4234  41.1414  45.8699  52.4234  52.4234  52.4234  ±9.44%       13
   · tiny-fast-glob  1,985.10   0.2548   2.9158   0.5038   0.6112   1.6131   1.7976   2.9158  ±3.46%      993   fastest


 BENCH  Summary

  tiny-fast-glob - bench/simple-files.bench.ts > 
    2.61x faster than fast-glob

  tiny-fast-glob - bench/many-files/no-symbolic-links.bench.ts > 
    81.67x faster than fast-glob

  tiny-fast-glob - bench/many-files/with-dir.bench.ts > 
    6.04x faster than fast-glob

  tiny-fast-glob - bench/many-files/with-symbolic-link.bench.ts > 
    10.04x faster than fast-glob
```

# Related projects

`tiny-fast-glob` is only support `glob` method yet, You might also be interested in these projects:

- [glob](https://github.com/isaacs/node-glob)
- [fast-glob](https://github.com/mrmlnc/fast-glob)

# tiny-fast-glob

The simplest and fastest glob method implementation.

# Feature

- ⚡️Super fast(2x ~ 80x faster than `fast-glob`)
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
 ✓ bench/many-files/with-symbolic-link.bench.ts (2) 2779ms
     name                 hz      min      max     mean      p75      p99     p995     p999     rme  samples
   · fast-glob        7.8499   114.42   146.53   127.39   130.40   146.53   146.53   146.53  ±5.90%       10
   · tiny-fast-glob  69.1188  13.1711  16.2020  14.4678  15.1868  16.2020  16.2020  16.2020  ±1.78%       35   fastest
 ✓ bench/simple-files.bench.ts (2) 1231ms
     name                  hz     min     max    mean     p75     p99    p995    p999     rme  samples
   · fast-glob       3,435.74  0.0518  2.9782  0.2911  0.3880  1.0141  1.5011  2.7710  ±3.58%     1719
   · tiny-fast-glob  9,051.90  0.0354  1.9574  0.1105  0.1193  0.4823  0.6997  1.0420  ±2.80%     4526   fastest
 ✓ bench/many-files/with-dir.bench.ts (2) 2940ms
     name                 hz      min      max     mean      p75      p99     p995     p999     rme  samples
   · fast-glob        7.4705   122.26   151.80   133.86   147.44   151.80   151.80   151.80  ±6.32%       10
   · tiny-fast-glob  42.9865  21.0540  25.7011  23.2631  23.5893  25.7011  25.7011  25.7011  ±2.34%       22   fastest
 ✓ bench/many-files/no-symbolic-links.bench.ts (2) 1418ms
     name                  hz      min      max     mean      p75      p99     p995     p999     rme  samples
   · fast-glob        24.4630  33.4605  54.2467  40.8781  42.8123  54.2467  54.2467  54.2467  ±8.18%       13
   · tiny-fast-glob  2,142.88   0.2476   2.2648   0.4667   0.5773   1.3402   1.9274   2.2305  ±3.28%     1072   fastest


 BENCH  Summary

  tiny-fast-glob - bench/simple-files.bench.ts >
    2.63x faster than fast-glob

  tiny-fast-glob - bench/many-files/no-symbolic-links.bench.ts >
    87.60x faster than fast-glob

  tiny-fast-glob - bench/many-files/with-dir.bench.ts >
    5.75x faster than fast-glob

  tiny-fast-glob - bench/many-files/with-symbolic-link.bench.ts >
    8.81x faster than fast-glob
```

# Related projects

- [glob](https://github.com/isaacs/node-glob)
- [fast-glob](https://github.com/mrmlnc/fast-glob)

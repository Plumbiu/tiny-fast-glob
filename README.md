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
 ✓ bench/many-files/with-dir.bench.ts (2) 2295ms
     name                 hz      min      max     mean      p75      p99     p995     p999     rme  samples
   · fast-glob        9.1601   106.96   114.42   109.17   110.44   114.42   114.42   114.42  ±1.49%       10
   · tiny-fast-glob  77.8127  11.1610  18.6849  12.8514  13.2992  18.6849  18.6849  18.6849  ±4.70%       39   fastest
 ✓ bench/many-files/no-symbolic-links.bench.ts (2) 1266ms
     name                  hz      min      max     mean      p75      p99     p995     p999     rme  samples
   · fast-glob        50.8688  18.8371  23.7109  19.6584  19.6593  23.7109  23.7109  23.7109  ±2.03%       26
   · tiny-fast-glob  7,794.78   0.1152   2.0714   0.1283   0.1242   0.2516   0.2802   0.3887  ±0.97%     3898   fastest
 ✓ bench/simple-files.bench.ts (2) 1226ms
     name                   hz     min     max    mean     p75     p99    p995    p999     rme  samples
   · fast-glob       20,331.70  0.0321  4.9306  0.0492  0.0419  0.1818  0.2527  1.3940  ±3.82%    10166   fastest
   · tiny-fast-glob     240.30  3.8913  4.8935  4.1614  4.2752  4.7646  4.8935  4.8935  ±0.82%      121
 ✓ bench/many-files/dot-true.bench.ts (2) 2876ms
     name                 hz      min      max     mean      p75      p99     p995     p999     rme  samples
   · fast-glob       11.2981  84.8644  92.7997  88.5105  90.3243  92.7997  92.7997  92.7997  ±1.93%       10   fastest
   · tiny-fast-glob  10.1306  95.8447   103.36  98.7109   100.08   103.36   103.36   103.36  ±1.67%       10
 ✓ bench/many-files/with-symbolic-link.bench.ts (2) 2181ms
     name                hz      min     max    mean     p75     p99    p995    p999     rme  samples
   · fast-glob       9.7539  98.9273  107.45  102.52  105.03  107.45  107.45  107.45  ±2.01%       10
   · tiny-fast-glob  246.23   3.8023  5.1650  4.0613  4.1529  4.7167  5.1650  5.1650  ±0.90%      124   fastest


 BENCH  Summary

  fast-glob - bench/simple-files.bench.ts > 
    84.61x faster than tiny-fast-glob

  fast-glob - bench/many-files/dot-true.bench.ts > 
    1.12x faster than tiny-fast-glob

  tiny-fast-glob - bench/many-files/no-symbolic-links.bench.ts > 
    153.23x faster than fast-glob

  tiny-fast-glob - bench/many-files/with-dir.bench.ts > 
    8.49x faster than fast-glob

  tiny-fast-glob - bench/many-files/with-symbolic-link.bench.ts > 
    25.24x faster than fast-glob
```

# Related projects

- [glob](https://github.com/isaacs/node-glob)
- [fast-glob](https://github.com/mrmlnc/fast-glob)

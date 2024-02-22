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
 ✓ bench/many-files/with-dir.bench.ts (2) 2333ms
     name                 hz      min      max     mean      p75      p99     p995     p999     rme  samples
   · fast-glob        8.9518   106.48   116.39   111.71   113.53   116.39   116.39   116.39  ±1.87%       10
   · tiny-fast-glob  77.8419  11.5740  15.2577  12.8465  13.6026  15.2577  15.2577  15.2577  ±2.42%       39   fastest
 ✓ bench/many-files/no-symbolic-links.bench.ts (2) 1256ms
     name                  hz      min      max     mean      p75      p99     p995     p999     rme  samples
   · fast-glob        47.8579  19.3157  24.9039  20.8952  21.4399  24.9039  24.9039  24.9039  ±2.46%       24
   · tiny-fast-glob  7,481.63   0.1186   0.5247   0.1337   0.1298   0.2730   0.3114   0.3990  ±0.68%     3741   fastest
 ✓ bench/simple-files.bench.ts (2) 1234ms
     name                   hz     min     max    mean     p75     p99    p995    p999     rme  samples
   · fast-glob       20,289.22  0.0321  5.5755  0.0493  0.0417  0.1703  0.2650  1.4836  ±4.31%    10147
   · tiny-fast-glob  39,750.79  0.0223  0.8901  0.0252  0.0243  0.0544  0.0792  0.1735  ±0.67%    19876   fastest
 ✓ bench/many-files/dot-true.bench.ts (2) 2922ms
     name                 hz      min      max     mean      p75      p99     p995     p999     rme  samples
   · fast-glob       11.2741  86.9163  92.2602  88.6986  89.1793  92.2602  92.2602  92.2602  ±1.40%       10   fastest
   · tiny-fast-glob   9.9759  96.4338   107.87   100.24   102.98   107.87   107.87   107.87  ±2.67%       10
 ✓ bench/many-files/with-symbolic-link.bench.ts (2) 2185ms
     name                hz      min     max    mean     p75     p99    p995    p999     rme  samples
   · fast-glob       9.8479  99.2007  107.08  101.54  102.68  107.08  107.08  107.08  ±1.61%       10
   · tiny-fast-glob  239.40   3.8939  4.9345  4.1772  4.2893  4.6904  4.9345  4.9345  ±0.80%      120   fastest


 BENCH  Summary

  tiny-fast-glob - bench/simple-files.bench.ts > 
    1.96x faster than fast-glob

  fast-glob - bench/many-files/dot-true.bench.ts > 
    1.13x faster than tiny-fast-glob

  tiny-fast-glob - bench/many-files/no-symbolic-links.bench.ts > 
    156.33x faster than fast-glob

  tiny-fast-glob - bench/many-files/with-dir.bench.ts > 
    8.70x faster than fast-glob

  tiny-fast-glob - bench/many-files/with-symbolic-link.bench.ts > 
    24.31x faster than fast-glob
```

# Related projects

- [glob](https://github.com/isaacs/node-glob)
- [fast-glob](https://github.com/mrmlnc/fast-glob)

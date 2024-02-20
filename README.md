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
 ✓ bench/many-files/with-symbolic-link.bench.ts (2) 3182ms
     name                 hz     min      max     mean      p75      p99     p995     p999     rme  samples
   · fast-glob        6.8642  132.89   161.00   145.68   154.44   161.00   161.00   161.00  ±4.83%       10
   · tiny-fast-glob  95.6887  9.2791  13.3699  10.4506  10.6812  13.3699  13.3699  13.3699  ±2.37%       48   fastest       
 ✓ bench/many-files/with-dir.bench.ts (2) 3288ms
     name                 hz      min      max     mean      p75      p99     p995     p999     rme  samples
   · fast-glob        6.6746   137.83   171.99   149.82   154.84   171.99   171.99   171.99  ±5.37%       10
   · tiny-fast-glob  49.6195  17.7521  27.8040  20.1534  20.5896  27.8040  27.8040  27.8040  ±4.32%       25   fastest      
 ✓ bench/simple-files.bench.ts (2) 1227ms
     name                  hz     min     max    mean     p75     p99    p995    p999     rme  samples
   · fast-glob       1,749.12  0.0810  2.4230  0.5717  0.7425  1.4651  1.7603  2.4230  ±3.39%      875
   · tiny-fast-glob  4,354.62  0.0321  1.6271  0.2296  0.3630  0.8835  0.9941  1.5507  ±3.95%     2179   fastest
 ✓ bench/many-files/no-symbolic-links.bench.ts (2) 1586ms
     name                  hz      min      max     mean      p75      p99     p995     p999     rme  samples
   · fast-glob        16.6655  48.4267  74.7283  60.0043  65.0996  74.7283  74.7283  74.7283  ±9.55%       10
   · tiny-fast-glob  1,715.22   0.1729   2.8002   0.5830   0.7941   2.1902   2.5048   2.8002  ±5.24%      858   fastest     


 BENCH  Summary

  tiny-fast-glob - bench/simple-files.bench.ts > 
    2.49x faster than fast-glob

  tiny-fast-glob - bench/many-files/no-symbolic-links.bench.ts > 
    102.92x faster than fast-glob

  tiny-fast-glob - bench/many-files/with-dir.bench.ts > 
    7.43x faster than fast-glob

  tiny-fast-glob - bench/many-files/with-symbolic-link.bench.ts > 
    13.94x faster than fast-glob
```

# Related projects

- [glob](https://github.com/isaacs/node-glob)
- [fast-glob](https://github.com/mrmlnc/fast-glob)

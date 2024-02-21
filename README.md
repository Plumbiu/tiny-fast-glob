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
 ✓ bench/many-files/with-dir.bench.ts (2) 2483ms
     name                 hz      min      max     mean      p75      p99     p995     p999     rme  samples
   · fast-glob        8.2057   114.90   134.93   121.87   128.62   134.93   134.93   134.93  ±4.19%       10
   · tiny-fast-glob  65.9363  12.0337  26.2400  15.1662  17.5170  26.2400  26.2400  26.2400  ±6.79%       34   fastest
 ✓ bench/many-files/no-symbolic-links.bench.ts (2) 1350ms
     name                  hz      min      max     mean      p75      p99     p995     p999      rme  samples
   · fast-glob        28.9400  26.3086  50.5151  34.5543  40.6516  50.5151  50.5151  50.5151  ±11.69%       15
   · tiny-fast-glob  6,029.96   0.1279   0.6501   0.1658   0.1704   0.3859   0.4417   0.5135   ±0.99%     3015   fastest
 ✓ bench/simple-files.bench.ts (2) 1222ms
     name                   hz     min     max    mean     p75     p99    p995    p999     rme  samples
   · fast-glob       16,595.75  0.0338  7.2667  0.0603  0.0559  0.2373  0.3532  1.3185  ±4.17%     8298
   · tiny-fast-glob  35,452.79  0.0233  2.5390  0.0282  0.0268  0.0772  0.1252  0.2445  ±1.40%    17727   fastest
 ✓ bench/many-files/dot-true.bench.ts (2) 4021ms
     name                hz      min     max    mean     p75     p99    p995    p999     rme  samples
   · fast-glob       9.6266  98.4271  112.52  103.88  104.47  112.52  112.52  112.52  ±3.20%       10   fastest
   · tiny-fast-glob  6.3512   148.95  164.71  157.45  160.26  164.71  164.71  164.71  ±2.16%       10
 ✓ bench/many-files/with-symbolic-link.bench.ts (2) 2393ms
     name                hz     min     max    mean     p75     p99    p995    p999     rme  samples
   · fast-glob       8.6987  111.43  123.08  114.96  115.44  123.08  123.08  123.08  ±2.07%       10
   · tiny-fast-glob  191.18  4.6161  7.4290  5.2306  5.4086  7.4290  7.4290  7.4290  ±1.82%       96   fastest


 BENCH  Summary

  tiny-fast-glob - bench/simple-files.bench.ts > 
    2.14x faster than fast-glob

  fast-glob - bench/many-files/dot-true.bench.ts > 
    1.52x faster than tiny-fast-glob

  tiny-fast-glob - bench/many-files/no-symbolic-links.bench.ts > 
    208.36x faster than fast-glob

  tiny-fast-glob - bench/many-files/with-dir.bench.ts > 
    8.04x faster than fast-glob

  tiny-fast-glob - bench/many-files/with-symbolic-link.bench.ts > 
    21.98x faster than fast-glob
```

# Related projects

- [glob](https://github.com/isaacs/node-glob)
- [fast-glob](https://github.com/mrmlnc/fast-glob)

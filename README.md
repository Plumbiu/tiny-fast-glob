# tiny-fast-glob

The simplest glob method implementation. 4x faster than fast-glob.

# Feature

- ⚡️104x faster than fast-glob and 12x faster than tiny-glob
- 📦Super lightweight.

# Install

```bash
npm install tiny-fast-glob
```

# Benchmark

One of reason of `tiny-fast-glob` is faster is that it **doesn't fully support all `fast-glob` or `glob` options**.

```
 ✓ bench/sync.bench.ts (2) 712ms
     name                  hz     min     max    mean     p75     p99    p995    p999     rme  samples
   · fast-glob         560.51  1.3619  3.4350  1.7841  1.8847  3.1143  3.4350  3.4350  ±2.41%      141
   · tiny-fast-glob  6,295.21  0.1354  1.4159  0.1589  0.1558  0.3050  1.0000  1.1672  ±2.52%     1574   fastest     
 ✓ bench/index.bench.ts (3) 1130ms
     name                  hz      min      max     mean      p75      p99     p995     p999     rme  samples        
   · fast-glob        47.0826  18.8528  25.7455  21.2393  22.4356  25.7455  25.7455  25.7455  ±6.19%       12   slowest
   · tiny-glob         405.32   2.0141   4.0439   2.4672   2.5722   3.8883   4.0439   4.0439  ±2.98%      102        
   · tiny-fast-glob  4,926.93   0.1758   1.1747   0.2030   0.1869   0.8592   0.9626   1.1445  ±2.65%     1232   fastest


 BENCH  Summary

  tiny-fast-glob - bench/index.bench.ts > 
    12.16x faster than tiny-glob
    104.64x faster than fast-glob

  tiny-fast-glob - bench/sync.bench.ts > 
    11.23x faster than fast-glob
```

Currently supported options:

```ts
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
   * @default true
   */
  dot?: boolean
}
```

# Related projects

`tiny-fast-glob` is only support `glob` method yet, You might also be interested in these projects:

- [glob](https://github.com/isaacs/node-glob)
- [fast-glob](https://github.com/mrmlnc/fast-glob)

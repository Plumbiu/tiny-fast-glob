const windowsSlashRE = /\\/g
export function slash(p: string) {
  return p.replace(windowsSlashRE, '/')
}

export function slashMap(ps: string[]) {
  return ps.map((item) => slash(item))
}

export function diffSet(r1: string[], r2: string[]) {
  const a = new Set(slashMap(r1))
  const b = new Set(slashMap(r2))
  return [...new Set([...a].filter((x) => !b.has(x)))]
}

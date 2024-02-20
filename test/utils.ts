const windowsSlashRE = /\\/g
export function slash(p: string) {
  return p.replace(windowsSlashRE, '/')
}

export function slashMap(ps: string[]) {
  return ps.map((item) => slash(item))
}

export function diffSet(fastglbResult: string[], tinyfastglobResult: string[]) {
  const a = new Set(fastglbResult)
  const b = new Set(slashMap(tinyfastglobResult))
  return [...new Set([...a].filter((x) => !b.has(x)))]
}

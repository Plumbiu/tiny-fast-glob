const windowsSlashRE = /\\/g
export function slash(p: string) {
  return p.replace(windowsSlashRE, '/')
}

export function slashMap(ps: string[]) {
  return ps.map((item) => slash(item))
}

const windowsSlashRE = /\\/g
export function slash(ps: string[]) {
  return ps.map((item) => item.replace(windowsSlashRE, '/'))
}

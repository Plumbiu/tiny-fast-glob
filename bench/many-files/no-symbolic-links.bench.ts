import { benches } from 'bench/utils'

benches('**/*.js', {
  followSymbolicLinks: false,
})

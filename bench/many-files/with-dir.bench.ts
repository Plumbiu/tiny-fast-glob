import { benches } from 'bench/utils'

benches(['**/*.js', '**/@*'], {
  onlyFiles: false,
})

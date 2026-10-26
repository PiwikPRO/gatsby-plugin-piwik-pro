import pkg from '../package.json' with { type: 'json' }
import { writeFileSync } from 'node:fs'

writeFileSync(
  'src/version.ts',
  `export const VERSION = ${JSON.stringify(pkg.version)}`
)

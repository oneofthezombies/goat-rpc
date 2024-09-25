import { run, npxPath } from './utils.mjs'

run(npxPath(), ['swc', '--out-dir', 'dist', 'src'])

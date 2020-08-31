import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

import { chromeExtension, simpleReloader } from 'rollup-plugin-chrome-extension'

export default {
  input: ['src/manifest.json'],
  output: {
    dir: 'dist',
    format: 'esm',
  },
  // always put chromeExtension() before other plugins
  plugins: [chromeExtension(), simpleReloader(), resolve(), commonjs()],
}

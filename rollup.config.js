// rollup.config.js
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

import { chromeExtension } from 'rollup-plugin-chrome-extension'

export default {
  input: 'src/manifest.json',
  // input: 'src/background.js',
  output: {
    dir: 'dist',
    format: 'esm',
  },
  // always put chromeExtension() before other plugins
  plugins: [
    chromeExtension(),
    resolve(),
    commonjs()
  ],
}
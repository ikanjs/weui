import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import babel from '@rollup/plugin-babel'
import pkg from './package.json' assert { type: 'json' }

export default [
  {
    input: 'index.ts',
    output: {
      name: 'Vui',
      file: pkg.browser,
      format: 'umd',
    },
    plugins: [
      json(),
      resolve(),
      commonjs(),
      babel({ babelHelpers: 'runtime' }),
    ],
  },
  {
    input: 'index.ts',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
    plugins: [
      json(),
      resolve(),
      commonjs(),
      babel({ babelHelpers: 'runtime' }),
    ],
  },
]

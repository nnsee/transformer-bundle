import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import globals from 'rollup-plugin-node-globals';
import builtins from 'rollup-plugin-node-builtins';
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';

export default {
  input: ['index.mjs'],
  output: {
    file: 'bundle.mjs',
    format: 'esm',
    exports: 'named',
    inlineDynamicImports: true
  },
  plugins: [
    nodeResolve({ preferBuiltins: false }),
    commonjs(),
    globals(),
    builtins(),
    json(),
    terser()
  ]
};

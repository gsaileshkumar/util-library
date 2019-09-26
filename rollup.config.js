import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

const dist = 'dist';
const bundle = 'bundle';
const input = 'src/index.js';
const output = [
  {
    file: `${dist}/${bundle}.esm.js`,
    format: 'esm',
  },
  {
    file: `${dist}/${bundle}.cjs.js`,
    format: 'cjs',
  },
  {
    file: `${dist}/${bundle}.umd.js`,
    format: 'umd',
    name: 'Util',
  },
  {
    file: `${dist}/${bundle}.iife.js`,
    format: 'iife',
    name: 'Util',
  },
];

export default {
  input,
  output,
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
    }),
    terser(),
  ],
};

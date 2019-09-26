const dist = 'dist';
const bundle = 'bundle';

export default {
  input: 'src/index.js',
  output: [
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
  ],
};

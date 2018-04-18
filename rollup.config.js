const nodeResolve = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');
const pkg = require('./package');

const now = new Date();
const banner = `/*!
 * createVueComponent v${pkg.version}
 * https://github.com/${pkg.repository}
 *
 * Copyright (c) 2018-present ${pkg.author.name}
 * Released under the ${pkg.license} license
 *
 * Date: ${now.toISOString()}
 */
`;

module.exports = {
  input: 'src/index.js',
  output: [
    {
      banner,
      file: 'dist/create-vue-component.js',
      format: 'umd',
      name: 'createVueComponent',
    },
    {
      banner,
      file: 'dist/create-vue-component.common.js',
      format: 'cjs',
    },
    {
      banner,
      file: 'dist/create-vue-component.esm.js',
      format: 'es',
    },
  ],
  plugins: [
    nodeResolve(),
    babel(),
  ],
};

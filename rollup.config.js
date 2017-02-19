import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import progress from 'rollup-plugin-progress';
import uglify from 'rollup-plugin-uglify';

export default {
  entry: './src/index.js',
  dest: 'index.js',
  format: 'umd',
  moduleName: 'dsalgo',
  sourceMap: true,
  plugins: [
    progress({ clearLine: true }),
    nodeResolve({
      jsnext: true,
      main: true
    }),
    commonjs({
      include: 'node_modules/**',
      sourceMap: true,
    }),
    babel({
      babelrc: true,
      exclude: 'node_modules/**',
      plugins: ['external-helpers'],
      runtimeHelpers: true
    }),
    uglify()
  ]
};

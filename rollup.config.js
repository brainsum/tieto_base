import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import multiEntry from 'rollup-plugin-multi-entry';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  entry: 'assets/scripts/**/*.js',
  dest: 'js/global.bundle.js',
  sourceMap: process.env.NODE_ENV == 'production' ? false : 'inline',
  plugins: [
    multiEntry(),
    nodeResolve(),
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      plugins: [
        "external-helpers",
      ],
      env: {
        production: {
          plugins: ["transform-remove-console"],
          // minified: true,
          // comments: false
        }
      }
    }),
    (process.env.NODE_ENV == 'production' && uglify())
  ]
};
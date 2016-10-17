import config from '../init';
import gulp from 'gulp';
import babel from 'rollup-plugin-babel';
import rollup from 'gulp-rollup';
import sourcemaps from 'gulp-sourcemaps';
import browserSync from 'browser-sync';
import path from 'path';
import util from 'gulp-util';

gulp.task('scripts', () => {
  gulp
    // Get these script assets...
    .src(config.scripts.entry)

    // [DEV] Init sourcemaps
    .pipe(util.env.production ? util.noop() : sourcemaps.init())

    // Compile the scripts.
    .pipe(rollup({
      entry: [
        process.cwd() + `/assets/scripts/global.js`,
      ],
      format: 'iife',
      external: ['jquery', 'drupal'],
      globals: {
        jquery: 'jQuery',
        drupal: 'Drupal'
      },
      plugins: [
        babel({
          babelrc: false,
          exclude: "node_modules/**",
          presets: [['es2015', {modules: false}]],
          plugins: ["external-helpers"],
          env: {
            production: {
              plugins: ["transform-remove-console"],
              minified: true,
              comments: false
            }
          }
        })
      ]
    }))

    // [DEV] Write sourcemaps.
    .pipe(util.env.production ? util.noop() : sourcemaps.write('.'))

    // Save the final output.
    .pipe(gulp.dest(config.scripts.dest))

    // Notify the browser that compile is finished.
    .pipe(browserSync.stream());
});


import config from '../init';
import gulp from 'gulp';
import babel from 'rollup-plugin-babel';
import rollup from 'gulp-rollup';
import sourcemaps from 'gulp-sourcemaps';
import browserSync from 'browser-sync';
import plumber from 'gulp-plumber';
import path from 'path';
import { PluginError, log } from 'gulp-util';

gulp.task('scripts', () => {
  gulp
    .src(config.scripts.entry)
    .pipe(sourcemaps.init())
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
    // .pipe(babel().on('error', stat => {
    //   let message = new PluginError('baasdbel', stat).toString();
    //   log(message);
    // }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.scripts.dest))
    .pipe(browserSync.stream());
});


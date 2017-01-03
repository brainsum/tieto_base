var config = require('../init');
var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var csscomb = require('gulp-csscomb');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var util = require('gulp-util');

/**
 * Styles task.
 *
 * @todo Break into "styles:dev" and "styles:prod"?
 */
gulp.task('styles', function () {
  return gulp
    // Get these style assets...
    .src(config.styles.entry, { base: config.styles.base })

    // [DEV] Init sourcemaps
    .pipe(util.env.production ? util.noop() : sourcemaps.init())

    // Convert the assets to plain CSS.
    .pipe(sass(config.sass).on('error', sass.logError))

    // Add vendor prefixes for older browsers.
    .pipe(autoprefixer(config.autoprefixer))

    // [PROD] Clean up CSS to match Drupal coding standards.
    .pipe(util.env.production ? csscomb() : util.noop())

    // [PROD] Minify CSS.
    // [DEV] Write sourcemaps.
    .pipe(util.env.production ? cssnano(config.cssnano) : sourcemaps.write('.'))

    // Save the final output.
    .pipe(gulp.dest(config.styles.dest));
});

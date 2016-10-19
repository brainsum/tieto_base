import config from '../init';
import gulp from 'gulp';
import sass from 'gulp-sass';
import cssnano from 'gulp-cssnano';
import csscomb from 'gulp-csscomb';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'gulp-autoprefixer';
import browserSync from 'browser-sync';
import util from 'gulp-util';

/**
 * Styles task.
 *
 * @todo Break into "styles:dev" and "styles:prod"?
 */
gulp.task('styles', () => {
  gulp
    // Get these style assets...
    .src(config.styles.entry, { base: config.styles.base })

    // [DEV] Init sourcemaps
    .pipe(util.env.production ? util.noop() : sourcemaps.init())

    // Convert the assets to plain CSS.
    .pipe(sass(config.sass).on('error', sass.logError))

    // [PROD] Add vendor prefixes for older browsers.
    .pipe(util.env.production ? autoprefixer(config.autoprefixer) : util.noop())

    // [PROD] Clean up CSS to match Drupal coding standards.
    .pipe(util.env.production ? csscomb() : util.noop())

    // [PROD] Minify CSS.
    // [DEV] Write sourcemaps.
    .pipe(util.env.production ? cssnano(config.cssnano) : sourcemaps.write('.'))

    // Save the final output.
    .pipe(gulp.dest(config.styles.dest))

    // Notify the browser that compile is finished.
    .pipe(browserSync.stream());
});

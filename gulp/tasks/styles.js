import config from '../init';
import gulp from 'gulp';
import sass from 'gulp-sass';
import cssnano from 'gulp-cssnano';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'gulp-autoprefixer';
import browserSync from 'browser-sync';
import util from 'gulp-util';

/**
 * Styles task.
 */
gulp.task('styles', () => {
  gulp
    // Get these style assets...
    .src(config.styles.entry)

    // If not running with --production, init sourcemaps.
    .pipe(util.env.production ? util.noop() : sourcemaps.init())

    // Convert the assets to plain CSS.
    .pipe(sass(config.sass)).on('error', sass.logError)

    // Add vendor prefixes for older browsers.
    .pipe(autoprefixer(config.autoprefixer))

    // If not running with --production, create sourcemaps,
    // otherwise compress the CSS.
    .pipe(util.env.production ? cssnano(config.cssnano) : sourcemaps.write('.'))

    // Save the final output.
    .pipe(gulp.dest(config.styles.dest))

    // Notify the browser that compile is finished.
    .pipe(browserSync.stream());
});

import gulp from 'gulp';
import CONFIG from '../config';
import sass from 'gulp-sass';
import cssnano from 'gulp-cssnano';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'gulp-autoprefixer';
import browserSync from 'browser-sync';
import util from 'gulp-util';

/**
 * Style specific options.
 *
 * @type {Object}
 */
let options = {
  sass: {
    outputStyle: 'expanded',
    includePaths: [

    ]
  },

  autoprefixer: {
    browsers: ['last 2 versions']
  },

  cssnano: {
    discardComments: {
      removeAll: true
    }
  }
}

/**
 * Styles task.
 */
gulp.task('styles', () => {

  gulp
    // Get these style assets...
    .src(CONFIG.styles.entry)

    // If not running with --production, init sourcemaps.
    .pipe(util.env.production ? util.noop() : sourcemaps.init())

    // Convert the assets to plain CSS.
    .pipe(sass(options.sass)).on('error', sass.logError)

    // Add vendor prefixes for older browsers.
    .pipe(autoprefixer(options.autoprefixer))

    // If not running with --production, create sourcemaps,
    // otherwise compress the CSS.
    .pipe(util.env.production ? cssnano(options.cssnano) : sourcemaps.write('.'))

    // Save the final output.
    .pipe(gulp.dest(CONFIG.styles.dest))

    // Notify the browser that compile is finished.
    .pipe(browserSync.stream());
});

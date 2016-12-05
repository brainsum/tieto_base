import config from '../init';
import gulp from 'gulp';
import babel from 'gulp-babel';
import sourcemaps from 'gulp-sourcemaps';
import util from 'gulp-util';

gulp.task('scripts', () => {
  gulp
    // Get these script assets...
    .src(config.scripts.entry, { base: config.scripts.base })

    // [DEV] Init sourcemaps
    .pipe(util.env.production ? util.noop() : sourcemaps.init())

    // Compile the scripts.
    .pipe(babel({
      sourceRoot: process.cwd(),
      presets: ["es2015"],
      plugins: [
        // ["resolver", {
        //   resolveDirs: [
        //     './node_modules/jquery/src/core',
        //     './node_modules/bootstrap/js/src',
        //   ]
        // }],
        "transform-remove-strict-mode",
      ],
      env: {
        production: {
          plugins: ["transform-remove-console"],
          minified: true,
          comments: false
        }
      }
    }))

    // [DEV] Write sourcemaps.
    .pipe(util.env.production ? util.noop() : sourcemaps.write('.'))

    // Save the final output.
    .pipe(gulp.dest(config.scripts.dest))
});


import gulp from 'gulp';
import babel from 'gulp-babel';
import config from '../config';
import browserSync from 'browser-sync';

gulp.task('scripts', () =>
  gulp.src(config.scripts.entry)
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest(config.scripts.dist))
    .pipe(browserSync.reload(config.browserSync));
)

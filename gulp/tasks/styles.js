import gulp from 'gulp';
import config from '../config';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import browserSync from 'browser-sync';

gulp.task('styles', () => {
  gulp
    .src(config.styles.entry)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.styles.dest))
    .pipe(browserSync.reload(config.browserSync));
});

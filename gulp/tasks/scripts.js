import gulp from 'gulp';
import babel from 'gulp-babel';
import config from '../config';
import sourcemaps from 'gulp-sourcemaps';
import browserSync from 'browser-sync';

gulp.task('scripts', () => {
  gulp
    .src(config.scripts.entry)
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.scripts.dest))
    .pipe(browserSync.stream());
});


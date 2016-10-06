import gulp from 'gulp';
import babel from 'gulp-babel';
import CONFIG from '../config';
import sourcemaps from 'gulp-sourcemaps';
import browserSync from 'browser-sync';

gulp.task('scripts', () => {
  gulp
    .src(CONFIG.scripts.entry)
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(CONFIG.scripts.dest))
    .pipe(browserSync.stream());
});


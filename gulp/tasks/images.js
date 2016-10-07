import config from '../init';
import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import browserSync from 'browser-sync';

gulp.task('images', () => {
  gulp
    .src(config.images.entry)
    .pipe(imagemin(config.imagemin))
    .pipe(gulp.dest(config.images.dest))
    .pipe(browserSync.stream());
});

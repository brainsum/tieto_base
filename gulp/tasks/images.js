import config from '../init';
import gulp from 'gulp';
import imagemin from 'gulp-imagemin';

gulp.task('images', function () {
  return gulp
    .src(config.images.entry)
    .pipe(imagemin())
    .pipe(gulp.dest(config.images.dest))
});

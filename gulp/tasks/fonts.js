import config from '../init';
import gulp from 'gulp';
import fontgen from 'gulp-fontgen';
import browserSync from 'browser-sync';

gulp.task('fonts', () => {
  gulp
    .src(config.fonts.entry)
    .pipe(fontgen({
      source: config.fonts.entry,
      dest: config.fonts.dest,
      css: false
    }))
    .pipe(gulp.dest(config.fonts.dest))
    .pipe(browserSync.stream());
});

import config from '../init';
import gulp from 'gulp';
import browserSync from 'browser-sync';

gulp.task('watch', ['reload'], () => {
  gulp.watch(config.styles.watch, () => {
    gulp.start('styles', browserSync.reload);
  });
  gulp.watch(config.scripts.entry, () => {
    gulp.start('scripts', browserSync.reload);
  })
});

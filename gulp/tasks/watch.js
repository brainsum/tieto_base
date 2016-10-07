import config from '../init';
import gulp from 'gulp';

gulp.task('watch', ['build', 'reload'], () => {
  gulp.watch(config.styles.watch, ['styles']);
  gulp.watch(config.scripts.entry, ['scripts']);
});

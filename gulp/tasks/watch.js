import config from '../init';
import gulp from 'gulp';

gulp.task('watch', ['reload'], () => {
  gulp.watch(config.styles.watch, ['styles']);
  gulp.watch(config.scripts.entry, ['scripts']);
});

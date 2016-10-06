import gulp from 'gulp';
import config from './gulp/config';
import requireDir from 'require-dir';

requireDir('./gulp/tasks', { recurse: true });

gulp.task('default', ['scripts', 'styles']);

gulp.task('watch', ['scripts', 'styles', 'reload'], () => {
  gulp.watch(config.scripts.watch, ['scripts']);
  gulp.watch(config.styles.watch, ['styles']);
});

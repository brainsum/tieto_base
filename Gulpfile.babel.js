import gulp from 'gulp';
import config from './gulp/config';
import requireDir from 'require-dir';

requireDir('./gulp/tasks', { recurse: true });

gulp.task('default', ['scripts', 'styles']);

gulp.task('watch', ['scripts', 'styles'], () => {
  gulp.watch(config.scripts.entry, ['scripts']);
  gulp.watch(config.styles.entry, ['styles']);
});

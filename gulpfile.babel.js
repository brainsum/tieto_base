import gulp from 'gulp';
import config from './gulp/init';
import extend from 'extend';
import util from 'gulp-util';
import requireDir from 'require-dir';

requireDir('./gulp/tasks', { recurse: true });

gulp.task('build', [
  'styles',
]);

gulp.task('build:full', [
  'styles',
  'images',
]);

gulp.task('default', ['build']);

var gulp = require('gulp');
var config = require('./gulp/init');
var extend = require('extend');
var util = require('gulp-util');
var requireDir = require('require-dir');

requireDir('./gulp/tasks', { recurse: true });

gulp.task('build', [
  'styles',
]);

gulp.task('build:full', [
  'styles',
  'images',
]);

gulp.task('default', ['build']);

var config = require('../init');
var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('watch', ['reload'], function () {
  gulp.watch(config.styles.watch, function () {
    gulp.start('styles', browserSync.reload);
  });
});

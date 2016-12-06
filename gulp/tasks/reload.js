var gulp = require('gulp');
var config = require('../init');
var browserSync = require('browser-sync');

browserSync.create();

gulp.task('reload', function () {
  browserSync.init(config.browserSync);
});

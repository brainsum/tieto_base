var config = require('../init');
var gulp = require('gulp');
var kss = require('kss');
var path = require('path');
var concat = require('gulp-concat');
var sequence = require('gulp-sequence');

gulp.task('kss', function () {
  return sequence(
    'styles',
    'kss:concat',
    'kss:generate'
  )();
});

gulp.task('kss:generate', function () {
  return kss({
    title: 'Style Guide',
    source: config.styles.base,
    destination: config.kss.dest,
    css: 'style.css',
    builder: 'builder',
    homepage: '../../builder/homepage.md'
  });
});

gulp.task('kss:concat', function () {
  return gulp
    .src(config.styles.dest + '/**/*.css')
    .pipe(concat('style.css'))
    .pipe(gulp.dest(config.kss.dest));
});

gulp.task('kss:watch', function () {
  gulp.watch([config.styles.watch, config.kss.watch], ['kss']);
});

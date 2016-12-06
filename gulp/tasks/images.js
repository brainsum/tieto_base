var config = require('../init');
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var merge = require('merge-stream');

gulp.task('images', function () {

  var formats = '/*.{' + config.images.formats.join(',') + '}';

  // Normal image assets.
  var images = gulp.src(config.images.entry + '/**' + formats)
    .pipe(imagemin())
    .pipe(gulp.dest(config.images.dest));

  // Images in the root folder, normally logo and theme screenshot.
  var theme = gulp.src(process.cwd() + formats)
    .pipe(imagemin())
    .pipe(gulp.dest(process.cwd()));

  // KSS Styleguide assets.
  var styleguide = gulp.src(config.kss.entry + '/**' + formats)
    .pipe(imagemin())
    .pipe(gulp.dest(config.kss.entry));

  return merge(images, theme, styleguide);
});

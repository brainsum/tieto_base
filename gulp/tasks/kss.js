import gulp from 'gulp';
import kss from 'kss';
import config from '../init';
import path from 'path';
import concat from 'gulp-concat';
import sequence from 'gulp-sequence';

gulp.task('kss', () => {
  sequence(
    'styles',
    'kss:concat',
    'kss:generate'
  )();
});

gulp.task('kss:generate', () => {
  return kss({
    title: 'Style Guide',
    source: config.styles.base,
    destination: config.kss.dest,
    css: 'style.css',
    builder: 'builder',
    homepage: '../../builder/homepage.md'
  });
});

gulp.task('kss:concat', () => {
  return gulp
    .src(config.styles.dest + '/**/*.css')
    .pipe(concat('style.css'))
    .pipe(gulp.dest(config.kss.dest));
});

gulp.task('kss:watch', () => {
  gulp.watch([config.styles.watch, config.kss.watch], ['kss']);
});
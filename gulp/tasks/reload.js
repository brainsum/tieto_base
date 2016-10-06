import gulp from 'gulp';
import config from '../config';
import browserSync from 'browser-sync';

browserSync.create();

gulp.task('reload', () => {
  var files = [
    config.styles.dest + '/**/*.css',
    config.scripts.dest + '/**/*.js'
  ];

  browserSync.init(files, config.browserSync);
});

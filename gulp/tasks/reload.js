import gulp from 'gulp';
import config from '../config';
import browserSync from 'browser-sync';

browserSync.create();

gulp.task('reload', () => {
  // let files = [
  //   config.styles.dest + '/**/*.css',
  //   config.scripts.dest + '/**/*.js'
  // ];

  browserSync.init(config.browserSync);
});

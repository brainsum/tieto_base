import gulp from 'gulp';
import config from '../init';
import browserSync from 'browser-sync';

browserSync.create();

gulp.task('reload', () => {
  browserSync.init(config.browserSync);
});

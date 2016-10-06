import gulp from 'gulp';
import CONFIG from '../config';
import browserSync from 'browser-sync';

browserSync.create();

gulp.task('reload', () => {
  browserSync.init(CONFIG.browserSync);
});

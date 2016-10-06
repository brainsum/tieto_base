import gulp from 'gulp'
import config from '../config'
import sass from 'gulp-sass'
import browserSync from 'browser-sync'

gulp.task('styles', () => {
  return gulp.src(config.styles.entry)
    .pipe(sass())
    .pipe(gulp.dest(config.styles.dest))
    .pipe(browserSync.reload(config.browserSync))
})

import gulp from 'gulp';
import babel from 'gulp-babel';
import config from '../config';

gulp.task('scripts', () => {
  gulp
    .src(config.scripts.entry)
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest(config.scripts.dest));
});


// @codingStandardsIgnoreFile
//
// @todo Merge the whole Gulp process with tieto_base somehow
// @todo Simplify Gulp builds, reduce configs, etc.
//
var gulp = require('gulp');
var shell = require('gulp-shell');
var util = require('gulp-util');
var gulp = require('gulp');
var sass = require('gulp-sass');
var csscomb = require('gulp-csscomb');
var eslint = require('gulp-eslint');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');

// @todo separate config!
var config = {
  // browser-sync
  // @see https://www.browsersync.io/docs/options
  browserSync: {
    notify: false
  },

  // node-sass
  // @see https://github.com/sass/node-sass#options
  sass: {
    outputStyle: 'expanded',
    precision: 3,
    includePaths: [
      process.cwd() + '/scss/',
      process.cwd() + '/node_modules',
      process.cwd() + '/node_modules/normalize.css',
      process.cwd() + '/node_modules/bootstrap-sass/assets/stylesheets/bootstrap', // v3, needed for glyphicons
    ],
  },

  // autoprefixer
  // @see https://github.com/postcss/autoprefixer#options
  autoprefixer: {
    browsers: ['last 2 versions']
  },

  // cssnano
  // @see http://cssnano.co/optimisations/
  cssnano: {
    discardComments: {
      removeAll: true
    }
  },

  kss: {
    entry: './builder',
    watch: './builder/**/*',
    dest: './styleguide'
  }
};

browserSync.create();

gulp.task('reload', function () {
  browserSync.init(config.browserSync);
});

gulp.task('watch', function () {
  gulp.watch('./scss/**/*.{scss,sass}', function () {
    gulp.start('sass', browserSync.reload);
  });
});

gulp.task('sass', function () {
  return gulp
    .src('scss/**/*.{scss,sass}')
    .pipe(sass(config.sass).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('css'));
});

gulp.task('csscomb', function () {
  return gulp
    .src('css/**/*.css')
    .pipe(csscomb())
    .pipe(gulp.dest('css'));
});

gulp.task('eslint', function () {
  return gulp
    .src('js/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('theme:reinstall', shell.task([
  'drush -y cset system.theme default bootstrap',
  'drush -y pmu tieto_base',
  'drush -y en tieto_base',
  'drush -y cset system.theme default tieto_base',
  'drush cr'
]));

gulp.task('lint', ['csscomb', 'eslint']);
gulp.task('build', ['sass', 'csscomb', 'eslint']);

gulp.task('default', ['sass']);

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
var imagemin = require('gulp-imagemin');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var kss = require('kss');
var concat = require('gulp-concat');
var sequence = require('gulp-sequence');

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

gulp.task('imagemin', function () {
  return gulp
    .src('images/**/*')
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
      // @see https://github.com/svg/svgo
      imagemin.svgo({plugins: [
        {removeViewBox: false},
        {removeTitle: true},
        {removeDimensions: true},
        {cleanupIDs: true},
      ]})
    ]))
    .pipe(gulp.dest('images'));
});

// @see https://www.drupal.org/node/1887862 [CSS Guidelines]
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

// Uninstalls tieto_base and bootstrap, and enabled bartik and seven.
gulp.task('theme:uninstall', shell.task([
  'drush -y en bartik seven',
  'drush -y cset system.theme default bartik',
  'drush -y cset system.theme admin seven',
  'drush -y pmu tieto_base',
  'drush -y pmu bootstrap',
  'drush cr'
]));

// Install tieto_base.
gulp.task('theme:install', shell.task([
  'drush -y en bootstrap tieto_base',
  'drush -y cset system.theme default tieto_base',
  'drush -y cset system.theme admin tieto_base',
  'drush cr'
]));

// Reinstall tieto_base.
gulp.task('theme:reinstall', shell.task([
  'drush -y cset system.theme default bootstrap',
  'drush -y pmu tieto_base',
  'drush -y en tieto_base',
  'drush -y cset system.theme default tieto_base',
  'drush -y cset system.theme admin tieto_base',
  'drush cr'
]));

gulp.task('kss', function () {
  return sequence(
    'sass',
    'kss:concat',
    'kss:generate'
  )();
});

gulp.task('kss:generate', function () {
  return kss({
    title: 'Style Guide',
    source: 'scss',
    destination: config.kss.dest,
    css: 'style.css',
    builder: 'builder',
    // Relative to the source directory (scss here), see https://github.com/kss-node/kss-node/issues/349
    homepage: '../builder/homepage.md'
  });
});

gulp.task('kss:concat', function () {
  return gulp
    .src('css/**/*.css')
    .pipe(concat('style.css'))
    .pipe(gulp.dest(config.kss.dest));
});

gulp.task('lint', ['csscomb', 'eslint']);
gulp.task('build', ['sass', 'csscomb', 'eslint']);

gulp.task('default', ['sass']);

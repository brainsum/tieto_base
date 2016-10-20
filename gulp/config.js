export default {

  // Paths
  styles: {
    base: './assets/scss',
    watch: './assets/scss/**/*.{sass,scss}',
    entry: [
      './assets/scss/**/*.{sass,scss}',
    ],
    dest: './css'
  },

  scripts: {
    base: './assets/scripts',
    watch: './assets/scripts/**/*.js',
    entry: [
      './assets/scripts/**/*.js',
    ],
    dest: './js'
  },

  fonts: {
    entry: './assets/fonts/**/*.{ttf,otf}',
    dest: './fonts'
  },

  images: {
    entry: '/assets/images/**/*.{jpg,jpeg,gif,png,svg}',
    dest: './img',
  },

  // gulp-imagemin
  // @see https://github.com/sindresorhus/gulp-imagemin
  imagemin: {

  },

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
      process.cwd() + '/assets/scss/',
      process.cwd() + '/node_modules',
      process.cwd() + '/node_modules/normalize.css',
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
  }
}

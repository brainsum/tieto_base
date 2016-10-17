export default {

  // Paths
  styles: {
    watch: './assets/scss/**/*.{sass,scss}',
    entry: './assets/scss/global.scss',
    dest: './css'
  },

  scripts: {
    watch: './assets/scripts/**/*.js',
    entry: './assets/scripts/**/*.js',
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
    includePaths: [
      process.cwd() + '/node_modules/normalize.css',
      process.cwd() + '/node_modules/bootstrap/scss',
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

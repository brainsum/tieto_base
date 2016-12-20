module.exports = {

  // Paths
  styles: {
    base: './scss',
    watch: './scss/**/*.{sass,scss}',
    entry: './scss/**/*.{sass,scss}',
    dest: './css'
  },

  // scripts: {
  //   base: './js',
  //   watch: './js/**/*.js',
  //   entry: [
  //     './js/global.js',
  //   ],
  //   dest: './js'
  // },

  images: {
    entry: './images',
    dest: './images',
    formats: ['jpg', 'jpeg', 'gif', 'png', 'svg'],
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
      process.cwd() + '/scss/',
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
  },

  kss: {
    entry: './builder',
    watch: './builder/**/*',
    dest: './styleguide'
  }
};

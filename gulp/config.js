const SRC = './assets';
const DIST = './dist';

export default {

  // Paths
  styles: {
    watch: `${SRC}/scss/**/*.{sass,scss}`,
    entry: `${SRC}/scss/global.scss`,
    dest: `${DIST}/css`
  },

  scripts: {
    watch: `${SRC}/scripts/**/*.js`,
    entry: `${SRC}/scripts/**/*.js`,
    dest: `${DIST}/js`
  },

  fonts: {
    entry: `${SRC}/fonts/**/*.{ttf,otf}`,
    dest: `${DIST}/fonts`
  },

  images: {
    entry: `${SRC}/images/**/*.{jpg,jpeg,gif,png,svg}`,
    dest: `${DIST}/img`,
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

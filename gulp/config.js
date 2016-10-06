export default {
  project: './',

  styles: {
    src: './assets/scss/**/*.scss',
    entry: './assets/scss/global.scss',
    dest: './dist/css'
  },

  scripts: {
    entry: './assets/scripts/**/*.js',
    dest: './dist/js'
  },

  browserSync: {
    // proxy: 'http://tietotheme.local',
    stream: true,
    notify: false
  }
}

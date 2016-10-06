export default {
  project: './',

  styles: {
    entry: './assets/scss/global.scss',
    dest: './dist/css'
  },

  scripts: {
    entry: './assets/scripts/**/*.js',
    dest: './dist/js',
  },

  browserSync: {
    proxy: 'http://localhost:3000',
    stream: true,
    notify: false
  }
}

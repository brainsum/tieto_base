export default {
  project: './',

  styles: {
    watch: './assets/scss/**/*.{sass,scss}',
    entry: './assets/scss/global.scss',
    dest: './dist/css'
  },

  scripts: {
    watch: './assets/scripts/**/*.js',
    entry: './assets/scripts/**/*.js',
    dest: './dist/js'
  },

  browserSync: {
    proxy: 'http://tietotheme.local',
    stream: true,
    notify: false
  }
}

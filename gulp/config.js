import { statSync } from 'fs';
import extend from 'extend';

let config = {
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
    notify: false
  }
}

// If a local config file exists, merge it into this config.
// This is good for overriding some options which should
// not be commited to the repo, e.g. browserSync proxy.
try {
  let localConfigFile = 'config.local.js';
  statSync(`${__dirname}/${localConfigFile}`);
  extend(true, config, require('./' + localConfigFile).default)
} catch (err) {
  console.warn('asdfasdf');
}

export default config

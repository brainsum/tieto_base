import { statSync } from 'fs';
import extend from 'extend';
import util from 'gulp-util';

let CONFIG = {

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
const localConfigFile = 'config.local.js';
try {
  statSync(`${__dirname}/${localConfigFile}`);
  extend(true, CONFIG, require('./' + localConfigFile).default)
} catch (err) {
  util.log(util.colors.yellow(`No ${localConfigFile} file found! If you want to override the configuration, create one.`));
}

export default CONFIG

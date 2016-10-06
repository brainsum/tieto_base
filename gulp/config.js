import { statSync } from 'fs';
import extend from 'extend';
import util from 'gulp-util';

let config = {

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
  },

  sass: {
    outputStyle: 'expanded',
    includePaths: [

    ]
  },

  autoprefixer: {
    browsers: ['last 2 versions']
  },

  cssnano: {
    discardComments: {
      removeAll: true
    }
  }
}

// If a local config file exists, merge it into this config.
// This is good for overriding some options which should
// not be commited to the repo, e.g. browserSync proxy.
const localConfigFile = 'config.local.js';
try {
  statSync(`${__dirname}/${localConfigFile}`);
  extend(true, config, require('./' + localConfigFile).default)
} catch (err) {
  util.log(util.colors.yellow(`No ${localConfigFile} file found! If you want to override the configuration, create one.`));
}

export default config

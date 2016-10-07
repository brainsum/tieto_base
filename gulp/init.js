// @todo move this to gulpfile and figure out how to load it in all tasks.
import util from 'gulp-util';
import extend from 'extend';
import config from './config'

// If a local config file exists, merge it into this config.
try {
  extend(true, config, require('./config.local.js').default);
} catch (err) {
  console.warn(util.colors.yellow(`
    No local configuration found.
    If you want to override a global setting, create a 'config.local.js'.
    This is useful for settings which you don't want to commit, such as browserSync proxy.
  `));
}

export default config;

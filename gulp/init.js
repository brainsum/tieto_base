import util from 'gulp-util';
import extend from 'extend';

// Load configuration.
var config = require('./config.json');

// If a local config file exists, merge it into this config.
try {
  extend(true, config, require('./config.local.json'));
} catch (err) {
  console.warn(util.colors.yellow(`
    No local configuration found.
    If you want to override a global setting, create a 'config.local.json'.
    This is useful for settings which you don't want to commit, such as browserSync proxy.
  `));
}

export default config;

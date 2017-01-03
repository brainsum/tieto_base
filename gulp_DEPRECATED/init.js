// @todo move this to gulpfile and figure out how to load it in all tasks.
var util = require('gulp-util');
var extend = require('extend');
var config = require('./config');

// If a local config file exists, merge it into this config.
try {
  extend(true, config, require('./config.local.js'));
} catch (err) {
  console.warn(util.colors.yellow(`
    No local configuration found.
    If you want to override a global setting, create a 'config.local.js'.
    This is useful for settings which you don't want to commit, such as browserSync proxy.
  `));
}

module.exports = config;

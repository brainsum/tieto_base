'use strict'; /**
               * @file
               * Global JavaScript, which loads on every page.
               */

// @todo fix imports
(function ($, Drupal) {
  'use strict';

  Drupal.behaviors.myBehavior = {
    attach: function attach(context, settings) {
      console.log('sup');
      $('.asdfasdf').hide();
    } };


})(jQuery, Drupal);
//# sourceMappingURL=global.js.map

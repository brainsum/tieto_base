/**
 * @file
 * Global JavaScript, which loads on every page.
 */

// @todo fix imports
(function ($, Drupal) {
  'use strict';

  Drupal.behaviors.myBehavior = {
    attach: function (context, settings) {
      console.log('sup');
      $('.asdfasdf').hide();
    }
  };

})(jQuery, Drupal);

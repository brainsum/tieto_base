/**
 * @file
 * Global JavaScript, which loads on every page.
 */

// @todo fix imports
import $ from 'jquery';
import Drupal from 'drupal';

Drupal.behaviors.myBehavior = {
  attach: function (context, settings) {
    console.log('sup');
  }
};

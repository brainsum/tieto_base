/**
 * @file
 * Initialize animation on scroll for logo, but use Underscore's
 * throttling to prevent too many function calls.
 */

(function (Drupal, window, document) {
  'use strict';

  var latestKnownScrollY = 0;
  var ticking = false;
  var logo = document.querySelector('#site-logo');
  var toggleClass = 'fixed';

  function update() {
    // reset the tick so we can
    // capture the next onScroll
    ticking = false;
    logo.classList.toggle(toggleClass, latestKnownScrollY > 300);
  }

  function onScroll() {
    latestKnownScrollY = window.scrollY; //No IE8
    requestTick();
  }

  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(update);
    }
    ticking = true;
  }

  Drupal.behaviors.fancyLogoAnimation = {
    attach: function (context, settings) {
      window.addEventListener('scroll', onScroll, false);
    }
  };

})(Drupal, window, document);

/**
 * @file
 * Toggleable responsive tabs for Local Tasks menus.
 */

(function (Drupal, $) {
  'use strict';

  Drupal.behaviors.tietoBaseTabsToggle = {
    attach: function (context, settings) {
      var dropdown_split_button = $('.btn-group .js-form-submit');

      dropdown_split_button.on('click', function(){
        var dropdown_split_list = $(this).siblings('.dropdown-menu');
        var dropdown_split_button_url = dropdown_split_list.children('#dropdown-item').attr('href');
        window.location.href = dropdown_split_button_url;
      });
    }
  };

})(Drupal, jQuery);

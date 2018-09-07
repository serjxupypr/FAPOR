// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

import slickSlider from './modules/slick.js';
import mobileMenu from './modules/mobile_menu.js';
import validation from './modules/validation.js';

( ($) => {
  'use strict';

  // When DOM is ready
  $(() => {
      slickSlider.init();
      mobileMenu.init();
      validation.init();
  });

})(jQuery);
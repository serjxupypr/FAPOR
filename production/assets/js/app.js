(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _slick = require('./modules/slick.js');

var _slick2 = _interopRequireDefault(_slick);

var _mobile_menu = require('./modules/mobile_menu.js');

var _mobile_menu2 = _interopRequireDefault(_mobile_menu);

var _validation = require('./modules/validation.js');

var _validation2 = _interopRequireDefault(_validation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function ($) {
  'use strict';

  // When DOM is ready

  $(function () {
    _slick2.default.init();
    _mobile_menu2.default.init();
    _validation2.default.init();
  });
})(jQuery); // You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

},{"./modules/mobile_menu.js":2,"./modules/slick.js":3,"./modules/validation.js":4}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var mobileMenu = {
    init: function init() {
        $('.mobile-menu-opener').click(function () {
            $(this).toggleClass('opened');
            $('.main-header-navigation').stop().slideToggle(200);
        });
    }
};

exports.default = mobileMenu;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var slickSlider = {
    init: function init() {
        this.$testimonialsSlider = $('.testimonials-list').slick({
            slidesToShow: 1,
            nextArrow: '<button type="button" class="slick-next"><span class="icon-arrow-right"></span></button>',
            prevArrow: '<button type="button" class="slick-prev"><span class="icon-arrow-left"></span></button>',
            dots: false
        });
    }
};

exports.default = slickSlider;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var validation = {

    init: function init() {
        var _this = this;

        var $subscribeForm = $('.main-footer .subscribe form');
        $('.main-footer .subscribe input[type=email]').focus(function () {
            $(this).removeClass('invalid').siblings('.error').hide();
        });

        $subscribeForm.attr('novalidate', 'true');

        $subscribeForm.submit(function () {
            return _this.emailValidation($('.main-footer .subscribe input[type=email]'));
        });
    },

    emailValidation: function emailValidation($elem) {
        var $error = $elem.siblings('.error');
        var pattern = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/;

        if ($elem.val().length != 0) {

            if (pattern.test($elem.val()) == false) {
                $error.text('incorrect email').show();
                $elem.addClass('invalid');
                return false;
            }
        } else {
            $error.text('please enter your email').show();
            $elem.addClass('invalid');
            return false;
        }
    }
};

exports.default = validation;

},{}]},{},[1]);

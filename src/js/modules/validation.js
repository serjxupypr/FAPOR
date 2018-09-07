

let validation = {

    init: function(){
        let $subscribeForm = $('.main-footer .subscribe form');
        $('.main-footer .subscribe input[type=email]').focus(function(){
            $(this).removeClass('invalid').siblings('.error').hide();
        });

        $subscribeForm.attr('novalidate', 'true');

        $subscribeForm.submit(() => {
            return this.emailValidation($('.main-footer .subscribe input[type=email]'));
        });
    },

    emailValidation: function($elem) {
        let $error = $elem.siblings('.error');
        let pattern = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/;

        if($elem.val().length != 0) {

            if(pattern.test($elem.val()) == false) {
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

export default validation;
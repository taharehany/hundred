$(document).ready(function () {
    "use strict";

    //variables
    var headerLoginBtn = $("header .butt .btn");
    var headerNavLink = $("header .nav-link");
    var amountShippingLi = $(".amount ul.selects li");
    var amountShippingLiActive = $(".amount ul.selects li.active");
    var amountInput = $(".amount-input input");
    var surveyFormRadio = $("section.survey .form-radio");
    var fieldsets = $("section.survey fieldset");
    var fieldset_1 = $("section.survey fieldset.step_1");
    var fieldset_2 = $("section.survey fieldset.step_2");
    var fieldset_3 = $("section.survey fieldset.step_3");
    var fieldset_4 = $("section.survey fieldset.step_4");
    var fieldset_5 = $("section.survey fieldset.step_5");
    var fieldsetsNextBtn = $("section.survey fieldset .clickable .next_btn");
    var fieldsetsFinalBtn = $("section.survey fieldset .clickable .final_btn");
    var secondStepShipping = $(".track .second_step");
    var thirdStepShipping = $(".track .third_step");
    var formAreaCancelBtn = $(".form-area .btn.cancel");
    var modalCloseBtn = $("section.modal .close");
    var modalReturnBtn = $("section.modal .return");

    var logoutDropdown = $(".logout-dropdown");
    var logoutDropdownPerson = $(".logout-dropdown .dropdown-person");

    //toggle between menue and x in navbar
    $("header .navbar-toggler").on("click", function () {
        if ($(this).hasClass("collapsed")) {
            $(this).removeClass('close')
        } else {
            $(this).addClass('close')
        }
    })

    //lang dropdown
    function langSlideDown() {
        $('.icon.lang').on('click', function () {
            $('.icon.lang .dropdown-lang').slideToggle(300);
        });
        $('.icon.lang .dropdown-lang').mouseleave(function () {
            $(this).fadeOut(500)
        });
        headerLoginBtn.on('click', function () {
            $('.icon.lang .dropdown-lang').fadeOut(0);
        });
        headerNavLink.on('click', function () {
            $('.icon.lang .dropdown-lang').fadeOut(0);
        });
        logoutDropdown.on('click', function () {
            $('.icon.lang .dropdown-lang').fadeOut(500)
        });
    }
    langSlideDown()

    function fadeLangAndUserPupup() {
        $('.slider, section').click(function () {
            $('.icon.lang .dropdown-lang').fadeOut(500);
            logoutDropdownPerson.fadeOut(500);
        });
    }
    fadeLangAndUserPupup()

    //lang dropdown
    $(window).scroll(function () {
        var myScroll = $(window).scrollTop();
        if (myScroll >= 20) {
            $('.icon.lang .dropdown-lang').slideUp(300);
            logoutDropdownPerson.fadeOut(500)
        }
    })

    //navbar collapse
    $('.navbar-collapse.collapse').mouseleave(function () {
        $(this).removeClass('show', 1000);
        $('.navbar-toggler').removeClass('close', 1000)
    });

    //alert warning
    $('.alert.alert-warning button.close').on('click', function () {
        $('.alert.alert-warning').fadeOut();
    });
    //alert warning

    //wow
    new WOW().init();

    //loading
    $('.loading').delay(500).fadeOut(500);

    //partners carousel
    $('.partners_carousel').owlCarousel({
        loop: true,
        margin: 30,
        items: 4,
        dots: true,
        dotsEach: 3,
        responsive: {
            0: {
                items: 2,
            },
            600: {
                items: 3
            },
            1000: {
                items: 4,
            }
        }
    });

    //add class active on click
    amountInput.val(amountShippingLiActive.text())
    amountShippingLi.on('click', function () {
        $(this).addClass('active').siblings().removeClass('active')
        amountInput.val($(this).text())
    });

    //add class active on click
    surveyFormRadio.on('click', function () {
        surveyFormRadio.removeClass('active');
        $(this).addClass('active');
        surveyFormRadio.removeClass('warning');
    });

    //survey radios
    fieldsets.slideUp(0);
    fieldset_1.slideDown(0);
    fieldsetsNextBtn.on('click', function () {
        if (fieldset_1.find('.form-radio').hasClass('active')) {
            $(this).parents('fieldset.step_1').slideUp(500).next().slideDown(500)
        } else if (fieldset_2.find('.form-radio').hasClass('active')) {
            $(this).parents('fieldset.step_2').slideUp(500).next().slideDown(500)
        } else if (fieldset_3.find('.form-radio').hasClass('active')) {
            $(this).parents('fieldset.step_3').slideUp(500).next().slideDown(500)
        } else if (fieldset_4.find('.form-radio').hasClass('active')) {
            $(this).parents('fieldset.step_4').slideUp(500).next().slideDown(500)
        } else {
            surveyFormRadio.addClass('warning')
        }
    });
    fieldsetsFinalBtn.on('click', function (e) {
        e.preventDefault();
        if (fieldset_5.find('.form-radio').hasClass('active')) {
            $(this).parents('fieldset.step_5').slideUp(500).next().slideDown(500);
        } else {
            surveyFormRadio.addClass('warning')
        }
    });


    //make line be light on step active
    if (secondStepShipping.hasClass('active')) {
        $('.shipping-steps').addClass('light_before');
    }
    if (thirdStepShipping.hasClass('active')) {
        $('.shipping-steps').addClass('light_after');
    }

    //select 2
    $('.global_inputs_box select').select2({
        scrollAfterSelect: true,
    });

    //on click cancel
    formAreaCancelBtn.on('click', function () {
        $('section.modal .modal-content').slideDown()
        $('section.modal').addClass('show');
    });

    //on click cancel
    modalCloseBtn.on('click', function () {
        $('section.modal .modal-content').slideUp()
        $('section.modal').removeClass('show');
    });

    //on click return
    modalReturnBtn.on('click', function () {
        $('section.modal .modal-content').slideDown()
        $('section.modal').removeClass('show');
    });

    //on click dropdown Toggle
    //lang dropdown
    function personSlideDown() {
        logoutDropdown.on('click', function () {
            logoutDropdownPerson.slideToggle(300);
        });
        logoutDropdownPerson.mouseleave(function () {
            $(this).fadeOut(500)
        });
        $('.icon.lang').on('click', function () {
            logoutDropdownPerson.fadeOut(500)
        });
    }
    personSlideDown()
});
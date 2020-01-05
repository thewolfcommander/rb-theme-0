$(document).ready(function () {
    "use strict";
    var window_width = $(window).width(),
        window_height = window.innerHeight,
        header_height = $(".default-header").height(),
        header_height_static = $(".site-header.static").outerHeight(),
        fitscreen = window_height - header_height;
    $(".fullscreen").css("height", window_height)
    $(".fitscreen").css("height", fitscreen);
    $(".menu-bar").on('click', function (e) {
        e.preventDefault();
        $("nav").toggleClass('hide');
        $("span", this).toggleClass("lnr-menu lnr-cross");
        $(".main-menu").addClass('mobile-menu');
    });
    $('select').niceSelect();
    $('.img-pop-up').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    $('.active-feature-carousel').owlCarousel({
        items: 1,
        loop: true,
        center: true
    });
    $('.play-btn').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
    $(document).ready(function () {
        $('#mc_embed_signup').find('form').ajaxChimp();
    });
    var form = $('#myForm');
    var submit = $('.submit-btn');
    var alert = $('.alert-msg');
    form.on('submit', function (e) {
        e.preventDefault();
        $.ajax({
            url: 'mail.php',
            type: 'POST',
            dataType: 'html',
            data: form.serialize(),
            beforeSend: function () {
                alert.fadeOut();
                submit.html('Sending....');
            },
            success: function (data) {
                alert.html(data).fadeIn();
                form.trigger('reset');
                submit.attr("style", "display: none !important");;
            },
            error: function (e) {
                console.log(e)
            }
        });
    });
});
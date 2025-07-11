"use strict"
$(document).ready(function () {
    var $body = $('body');
    var $heroSlider = $('.hero-slider');
    var $heroVideo = $('#heroVideo');
    var $playPauseButton = $('#playPauseButton');
    var $playIcon = $('.play-icon');
    var $pauseIcon = $('.pause-icon');


    var $searchIconBtn = $('#searchIconBtn');
    var $searchOverlay = $('#searchOverlay');
    var $closeSearchBtn = $('#closeSearchBtn');
    var $searchOverlayInput = $('#searchOverlayInput');



    var $expandButton = $('.expand-button');
    var $additionalText = $('.expandable-content .additional-text');

    var $plusIcon = $expandButton.find('.plus-icon');
    var $minusIcon = $expandButton.find('.minus-icon');

    var $menuIcon = $('.menu-icon');

    var $mobileMenuToggle = $('.menu-icon');
    var $mobileMenu = $('.header-menu');
    var $menuOverlay = $('#menu-overlay');

    $heroSlider.slick({
        autoplay: false,

        autoplaySpeed: 5000,
        dots: false,
        arrows: true,
        infinite: true,
        speed: 800,
        fade: true,
        cssEase: 'linear'
    });


    $playPauseButton.on('click', function () {
        if ($heroVideo[0].paused) {
            $heroVideo[0].play();
            $heroVideo[0].muted = false;
            $playIcon.addClass('hidden');
            console.log('Video is playing');
            $pauseIcon.removeClass('hidden');
            console.log('Video is playing');
        } else {
            $heroVideo[0].pause();
            $playIcon.removeClass('hidden');
            console.log('Video is paused');
            $pauseIcon.addClass('hidden');
            console.log('Video is paused');
        }
    });


    $heroVideo[0].onended = function () {
        $heroVideo[0].pause();
        $playIcon.removeClass('hidden');
        $pauseIcon.addClass('hidden');
    };




    $heroSlider.on('afterChange', function (event, slick, currentSlide) {
        if (currentSlide === 0) {

            if ($heroVideo[0].paused) {
                $playIcon.removeClass('hidden');
                $pauseIcon.addClass('hidden');
            } else {
                $playIcon.addClass('hidden');
                $pauseIcon.removeClass('hidden');
            }

        } else {
            $heroVideo[0].pause();
            $playIcon.removeClass('hidden');
            $pauseIcon.addClass('hidden');
            $heroVideo[0].currentTime = 0;
            $heroVideo[0].muted = true;
        }
    });


    $heroSlider.on('init', function (event, slick) {
        if (slick.currentSlide !== 0) {
            $heroVideo[0].pause();
            $heroVideo[0].muted = true;
            $playIcon.removeClass('hidden');
            $pauseIcon.addClass('hidden');
        }
    });



    $searchIconBtn.on('click', function () {
        $searchOverlay.removeClass('hidden');
        setTimeout(() => {
            $searchOverlay.addClass('active');
            $searchOverlayInput.focus();
            $body.addClass('overflow-hidden');
        }, 10);
    });


    $closeSearchBtn.on('click', function () {
        $searchOverlay.removeClass('active');
        setTimeout(() => {
            $searchOverlay.addClass('hidden');
            $searchOverlayInput.val('');
            $body.removeClass('overflow-hidden');
        }, 300);
    });


    $(document).on('keydown', function (e) {
        if (e.key === 'Escape' && $searchOverlay.hasClass('active')) {
            $searchOverlay.removeClass('active');
            setTimeout(() => {
                $searchOverlay.addClass('hidden');
                $searchOverlayInput.val('');
            }, 300);
        }
    });



    $expandButton.on('click', function () {
        if ($additionalText.hasClass('hidden')) {

            $additionalText.removeClass('hidden');
            $expandButton.addClass('expanded');
            $expandButton.find('svg').addClass('expanded');
            $plusIcon.addClass('hidden');
            $minusIcon.removeClass('hidden');
        } else {

            $additionalText.addClass('hidden');
            $expandButton.removeClass('expanded');

            $plusIcon.removeClass('hidden');
            $minusIcon.addClass('hidden');
        }
    });

    $mobileMenuToggle.on('click', function () {
        if ($mobileMenu.hasClass('-right-full')) {
            // Menu is hidden, show it
            $mobileMenu.removeClass('-right-full').addClass('right-0');
            $body.addClass('overflow-hidden'); // Prevent body scroll
            $menuOverlay.addClass('active').removeClass('hidden');
        } else {
            // Menu is visible, hide it
            $mobileMenu.addClass('-right-full').removeClass('right-0');
            $body.removeClass('overflow-hidden'); // Allow body scroll
            $menuOverlay.removeClass('active').addClass('hidden');
        }
    });

    $menuOverlay.on('click', function () {
        $mobileMenu.addClass('-right-full').removeClass('right-0');
        $body.removeClass('overflow-hidden'); // Allow body scroll
        $menuOverlay.removeClass('active').addClass('hidden');
    });


});



// ----------Slicker----------
$(function(){

    $('.gallery__slider').slick({
		prevArrow: '<button type="button" class="slick-arrow left-arrow"><img src="/img/gallery/left-arrow.svg" alt="Left arrow"></button>',
		nextArrow: '<button type="button" class="slick-arrow right-arrow"><img src="/img/gallery/right-arrow.svg" alt="Right arrow"></button>',
    });

    $('.tours__popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

	$('.gallery__slider').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
	});
	$('.burger').on('click', function () {
		$('.burger__line').toggleClass("active");
		$('.header__menu').toggleClass("active");
	});

});
$(document).ready(function(){

		init = function(){
			goLoader();
			resizeHandler();
			uiEffects();
			$(window).resize(function(){
				resizeHandler();
			});
		}

		goLoader = function(){
			loaderFunc();
			loadAnimate = setInterval(loaderFunc, 7200);
		}

		loaderFunc = function(){
			var delay = 1200;
			$('div.triangle').addClass('flip');
			$('h1').addClass('activate');
			setTimeout(function(){
				$('div.triangle').removeClass('flip');
				setTimeout(function(){
					$('div.triangle').addClass('step2');
					$('div.triangle').addClass('flip');
					setTimeout(function(){
						$('div.triangle').removeClass('step2').removeClass('flip');
						setTimeout(function(){
							$('div.triangle').addClass('step3');
							$('div.triangle').addClass('flip');
							setTimeout(function(){
								$('div.triangle').removeClass('step3').removeClass('flip');
							}, delay);
						}, delay);
					}, delay);
				},delay);
			}, delay);
		}

		stopLoader = function(){
			$('div.logo-container').addClass('disappear');
			$('div.loader-container').addClass('disappear');
			clearInterval(loadAnimate);
		}

		uiEffects = function(){
			$('body').click(function(){
					stopLoader();
			});
		}

		resizeHandler = function(){
			var viewHeight = $(window).height();
			var viewWidth = $(window).width();
			$('div.loader-container').css('height',viewHeight);
			$('div.loader-container').css('width', viewWidth);
		}

		init();
		
});
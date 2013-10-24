$(document).ready(function(){
		function init(){
			goLoader();
			resizeHandler();
			uiEffects();

			setTimeout(function(){
				stopLoader();
			}, 10000);
		}


		function goLoader(){
			loaderFunc();
			loadAnimate = setInterval(loaderFunc, 7200);
		}


		function loaderFunc(){
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

		function stopLoader(){
			$('div.logo-container').addClass('disappear');
			$('div.loader-container').addClass('disappear');
			clearInterval(loadAnimate);
			
		}

		
		function uiEffects(){
			$('body').click(function(){
					stopLoader();
			});
		}
		


		function resizeHandler(){
			var viewHeight = $(window).height();
			var viewWidth = $(window).width();
			$('div.loader-container').css('height',viewHeight);
			$('div.loader-container').css('width', viewWidth);
			console.log(viewHeight);
			console.log(viewWidth);

		}

		init();

		$(window).resize(function(){
			resizeHandler();
		});
		

		
		
});
var themeModule;

(function($) {
	themeModule = (function() {

		var elements = {
			$html : $('html'),
			$document : $( document ),
		}

		/**
		 *-------------------------------------------------------------------------------------------------------------------------------------------
		 * Validate inputs
		 *-------------------------------------------------------------------------------------------------------------------------------------------
		 */
		function validateInputs() {
			$('input[name="phone"], input[name="your-phone"], input[name="client_phone"]').on('change keyup keydown', function() {
				var myVar = $(this).val();
				var digit = ('' + myVar)[2];

				if (digit == '0') {
					$(this).val(' ');
					$(this).blur().focus();
				}
				$('input[type="submit"]').attr('disabled', 'disabled');

				var re = new RegExp("_$");

				if (!re.test(myVar)) {
					$(this).removeClass('error-phone');
					$('input[type="submit"]').removeAttr('disabled');
					$('button[type="submit"]').removeAttr('disabled').find('.shine-button__el').addClass('animate');
				} else {
					$(this).addClass('error-phone');
				}
			});
		}

		return {
			init: function() {
				this.lazyLoadWindow();
			},

			/**
			 *-------------------------------------------------------------------------------------------------------------------------------------------
			 * 0. window load
			 *-------------------------------------------------------------------------------------------------------------------------------------------
			 */

			lazyLoadWindow: function(){
				var pl = this.preloader();
			 	window.onload = function(){
			 		$('.preloader').css({
			 			'visibility': 'hidden',
			 			'display': 'none'
			 		});
			 		pl = null;
			 	}
			 },
		}
	}());
})(jQuery);

jQuery(document).ready(function () {
    themeModule.init();
});


/*!
 * iphone-x-fix.js v1.0.0 (https://github.com/manifestinteractive/iphone-x-fix)
 * @copyright 2017 Peter Schmalfeldt
 * @license MIT (https://github.com/manifestinteractive/iphone-x-fix/blob/master/LICENSE)
 */
(function() {

	var needsFix = function () {
		var iPhoneX = [/Mobile\/15A372/i];

		for (var i = 0; i < iPhoneX.length; i++) {
			if (navigator.userAgent.match(iPhoneX[i])) {
				return true;
			}
		}

		return false;
	}

	var updateOrientation = function () {
		if (needsFix() && typeof window.orientation !== 'undefined') {
			document.documentElement.classList.remove('iphone-x-fix-left');
			document.documentElement.classList.remove('iphone-x-fix-right');

			if (window.orientation === 90) {
				document.documentElement.classList.add('iphone-x-fix-left');
			} else if (window.orientation === -90) {
				document.documentElement.classList.add('iphone-x-fix-right');
			}
		}
	}

	window.onorientationchange = updateOrientation;
	updateOrientation();

})();

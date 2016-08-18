'use strict';
angular
	.module('EAG')
	.directive('eagLoading', eagLoading);

function eagLoading() {
	var directive = {
		restrict : 'AE',
		template : '<div class="loading"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>'
	}
	return directive;
}	

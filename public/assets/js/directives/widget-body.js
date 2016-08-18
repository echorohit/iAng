'use strict';

angular
	.module('EAG')
	.directive('eagWidgetBody', eagWidgetBody);

function eagWidgetBody(){
	var directive = {
		requires: '^eagWidget',
		scope: {
			loading: '@?',
			classes: '@?'
		},
		transclude: true,
		template:'<div class="widget-body" ng-class="classes"><rd-loading ng-show="loading"></rd-loading><div ng-hide="loading" class="widget-content" ng-transclude></div></div>',
		restrict: 'E'
	}
	return directive;	
}

'use strict';
/**
 * Widget Directive
 */

angular
    .module('EAG')
    .directive('eagWidget', eagWidget);

function eagWidget() {
    var directive = {
        transclude: true,
        template: '<div class="widget" ng-transclude></div>',
        restrict: 'EA'
    };
    return directive;

    function link(scope, element, attrs) {
        /* */
    }
};
'use strict';
/**
 * Widget Footer Directive
 */

angular
    .module('EAG')
    .directive('eagWidgetFooter', eagWidgetFooter);

function eagWidgetFooter() {
    var directive = {
        requires: '^eagWidget',
        transclude: true,
        template: '<div class="widget-footer" ng-transclude></div>',
        restrict: 'E'
    };
    return directive;
};
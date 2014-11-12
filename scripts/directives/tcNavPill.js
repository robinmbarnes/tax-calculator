taxCalculatorAppModule.directive('tcNavPill', function () {
  return {
    restrict: 'E',
    transclude: true,
    replace: true,
    templateUrl: '/scripts/directives/templates/tcNavPill.html'
  };
});


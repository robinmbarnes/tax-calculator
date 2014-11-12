taxCalculatorAppModule.directive('rbDecimal', ['DecimalValidator', function (DecimalValidator) {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function (scope, element, attrs, controller) {
      controller.$parsers.unshift(function () {
        controller.$setValidity('rbDecimal', DecimalValidator.isValid(element.val()));
        return true;
      });
    }
  };
}]);

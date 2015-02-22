module.exports = function (DecimalValidator) {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function (scope, element, attrs, controller) {
      controller.$parsers.unshift(function () {
        var isValid = (controller.$pristine || DecimalValidator.isValid(element.val()));
        controller.$setValidity('rbDecimal', isValid);
        return element.val();
      });
    }
  };
};

taxCalculatorAppModule.controller(
  'MainController',
  ['$scope', 'TaxCalculator2014', 'TaxOutput', 'TaxInput', mainController]
);

function mainController ($scope, taxCalculator2014, taxOutput, taxInput) {

  $scope.taxOutput = taxOutput();

  $scope.taxInput = taxInput();

  $scope.foo = 0;

  $scope.doCalculation = function () {
    $scope.taxOutput = taxCalculator2014($scope.taxInput);
  }
}
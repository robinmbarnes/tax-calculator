module.exports = function mainController (
  $scope,
  taxCalculator2014,
  taxOutput,
  taxInput) {

  $scope.taxOutput = taxOutput();

  $scope.taxInput = taxInput();

  $scope.foo = 0;

  $scope.doCalculation = function () {console.log($scope.taxInput);
    $scope.taxOutput = taxCalculator2014($scope.taxInput);
  }
}
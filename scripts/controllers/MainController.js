taxCalculatorAppModule.controller(
  'MainController',
  ['$scope', 'TaxCalculator', 'TaxCalculator2014Delegate', mainController]
);

function mainController ($scope, taxCalculator, taxCalculator2014Delegate) {
  $scope.breakdown = {
    grossSalary: 0.00,
    nationalInsurance: 0.00,
    studentLoan: 0.00,
    pension: 0.00,
    taxFreeAllowance: 0.00,
    tax: 0.00,
    totalDeductions: 0.00,
    netSalary: 0.00
  };

  taxCalculator.setCalculationDelegate(taxCalculator2014Delegate);

  $scope.taxCalculator = taxCalculator;

  $scope.salary = 0;
  $scope.pension = 0;
  $scope.pensionType = '%';
  $scope.breakdownTimePeriod = 0;
}
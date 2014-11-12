taxCalculatorAppModule.factory('TaxCalculator2014Delegate', ['TaxAmountCalculator2014Delegate', function (taxAmountCalculator) {
  return {
    calculate: function () {
      this.taxFreeAllowance = 10000.00;
      this.taxAmount = taxAmountCalculator(this.grossSalaryAmount, this.taxFreeAllowance);

    }
  }
}]);

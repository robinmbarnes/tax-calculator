taxCalculatorAppModule.factory('TaxAmountCalculator2014',
  function () {

    return function (salary, personalAllowance) {

      salary = parseFloat(salary);
      personalAllowance = parseFloat(personalAllowance);

      var rates = [
        {
          threshold: personalAllowance,
          percentage: 20.00
        },
        {
          threshold: personalAllowance + 31865.00,
          percentage: 40.00
        },
        {
          threshold: 150000.00,
          percentage: 45.00
        }
      ];

      var taxAmount = 0.00;
      taxAmount = rates.reduce(function (currentTaxAmount, currentRate, i, rateList) {

        var salaryWithinThreshold = salary - currentRate.threshold;

        if(salaryWithinThreshold <= 0) {
          return currentTaxAmount;
        }

        if(rateList[i+1] !== undefined) {
          var nextThreshold = rateList[i+1].threshold;
          var salaryAboveNextThreshold = salary - nextThreshold;
          if(salaryAboveNextThreshold > 0) {
            salaryWithinThreshold -= salaryAboveNextThreshold;
          }
        }

        var taxForThisThreshold = (currentRate.percentage / 100) * salaryWithinThreshold;
        return currentTaxAmount + taxForThisThreshold;

      }, taxAmount);

      return taxAmount;
    };
  }
);

taxCalculatorAppModule.factory('TaxInput', function () {
  return function () {
    return {
      grossSalary: null,
      pensionAmount: 0,
      ageRange: 0,
      pensionType: '%',
      isMarried: false,
      isBlind: false,
      isExemptFromNationalInsurance: false,
      isRepayingStudentLoan: false,
      timePeriod: 0
    };
  };
});

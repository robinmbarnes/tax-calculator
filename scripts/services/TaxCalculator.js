taxCalculatorAppModule.factory('TaxCalculator', function () {

  var taxCalculationDelegate = null;
  
  return {

    grossSalaryAmount : 0.00,
    taxFreeAllowanceAmount : 0.00,
    nationalInsuranceAmount : 0.00,
    studentLoanAmount : 0.00,
    pensionAmount : 0.00,
    taxAmount : 0.00,
    totalDeductionsAmount : 0.00,
    netSalaryAmount : 0.00,

    ageRange : 0,
    pensionType : '%',

    isMarried : false,
    isBlind : false,
    isExemptFromNationalInsurance : false,
    isRepayingStudentLoan : false,

    timePeriod : 0,

    calculate: function () {
      if(taxCalculationDelegate === null) {
        throw 'Tax calculation delegate not set'
      }
      taxCalculationDelegate.calculate.bind(this)();
    },

    setCalculationDelegate: function (delegate) {
      taxCalculationDelegate = delegate;
    }

  };
});
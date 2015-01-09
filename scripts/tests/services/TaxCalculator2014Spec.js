describe("Tax Calculator 2014", function () {

  var taxCalculator;

  beforeEach(module("taxCalculatorApp"));
  beforeEach(inject(function (_TaxCalculator2014_) {
    taxCalculator = _TaxCalculator2014_;
  }));

  using('testCases', [
    {
      taxInput: {
        grossSalary: 20000.00,
        pensionAmount: 0,
        ageRange: 0,
        pensionType: '%',
        isMarried: false,
        isBlind: false,
        isExemptFromNationalInsurance: false,
        isRepayingStudentLoan: false,
        timePeriod: 0
      },
      taxOutput: {
        personalAllowance: 10000,
        netSalary: 16554.72,
        nationalInsurance: 1445.28,
        studentLoan: 0,
        pension: 0,
        tax: 2000,
        totalDeductions: 3445.28
      }
    }
  ],

    function (testCase) {
      it("calculates tax correctly", function () {
        expect(taxCalculator(
          testCase.taxInput
        )).toEqual(testCase.taxOutput);
      });
    }

  );
});
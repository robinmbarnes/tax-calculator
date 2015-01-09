describe('StudentLoanCalcuator2014', function () {

  var studentLoanCalculator;

  beforeEach(module("taxCalculatorApp"));
  beforeEach(inject(function (_StudentLoanCalculator2014_) {
    studentLoanCalculator = _StudentLoanCalculator2014_;
  }));

  using('testCases', [
    {
      salary: 16910.00,
      repayment: 0.00
    },
    {
      salary: 26910.00,
      repayment: 900.00
    }
  ],

    function (testCase) {
      it('should calculate student loan amount correctly', function () {
        expect(studentLoanCalculator(testCase.salary)).toEqual(testCase.repayment);
      });
    }
  );

});

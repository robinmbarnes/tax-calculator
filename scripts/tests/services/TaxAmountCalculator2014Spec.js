describe("Tax Amount Calculator 2014", function () {

  var taxAmountCalculator;

  beforeEach(module("taxCalculatorApp"));
  beforeEach(inject(function (_TaxAmountCalculator2014_) {
    taxAmountCalculator = _TaxAmountCalculator2014_;
  }));

  using('testCases', [
    {
      salary: 7956.00,
      personalAllowance: 10000.00,
      taxAmount: 0.00
    },
    {
      salary: 20000.00,
      personalAllowance: 10000.00,
      taxAmount: 2000.00
    },
    {
      salary: 50000.00,
      personalAllowance: 10000.00,
      taxAmount: 9627.00
    },
    {
      salary: 110000.00,
      personalAllowance: 5000.00,
      taxAmount: 35627.00
    },
    {
      salary: 140000.00,
      personalAllowance: 0.00,
      taxAmount: 49627.00
    },
    {
      salary: 140000.00,
      personalAllowance: 2230.00,
      taxAmount: 48735.00
    },
    {
      salary: 25000.00,
      personalAllowance: 10660.00,
      taxAmount: 2868.00
    }

  ],

    function (testCase) {
      it("calculates tax correctly", function () {
        expect(taxAmountCalculator(
          testCase.salary,
          testCase.personalAllowance
        )).toEqual(testCase.taxAmount);
      });
    }

  );
});
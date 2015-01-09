describe("National Insurance Calculator 2014", function () {

  var nationalInsuranceCalculator;

  beforeEach(module("taxCalculatorApp"));
  beforeEach(inject(function (_NationalInsuranceCalculator2014_) {
    nationalInsuranceCalculator = _NationalInsuranceCalculator2014_;
  }));

  using('testCases', [
    {
      salary: 7956.00,
      nationalInsurance: 0.00
    },
    {
      salary: 40000.00,
      nationalInsurance: 3845.28
    },
    {
      salary: 42000.00,
      nationalInsurance: 4071.78
    }
  ],

    function (testCase) {
      it("calculates national insurance amount correctly", function () {
        expect(nationalInsuranceCalculator(testCase.salary)).toEqual(testCase.nationalInsurance);
      });
    }

  );
});
describe("Personal Allowance Calculator 2014", function () {

  var personalAllowanceCalculator;

  beforeEach(module("taxCalculatorApp"));
  beforeEach(inject(function (_PersonalAllowanceCalculator2014_) {
    personalAllowanceCalculator = _PersonalAllowanceCalculator2014_;
  }));

  using('allowanceMap', [
    {
      salary: 100000.00,
      personalAllowance: 10000.00
    },
    {
      salary: 110000.00,
      personalAllowance: 5000.00
    },
    {
      salary: 100457.49,
      personalAllowance: 9772
    },
    {
      salary: 119999.99,
      personalAllowance: 1
    },
    {
      salary: 250000.00,
      personalAllowance: 0
    }
  ],

    function (allowance) {
      it("calculates personal allowance for person under 64 correctly", function () {
        expect(personalAllowanceCalculator(allowance.salary, 0)).toEqual(allowance.personalAllowance);
      });
    }

  );

  using('allowanceMap', [
    {
      salary: 27000.00,
      personalAllowance: 10500.00
    },
    {
      salary: 27500.99,
      personalAllowance: 10250.00
    },
    {
      salary: 100000.00,
      personalAllowance: 10000.00
    },
    {
      salary: 110000.00,
      personalAllowance: 5000.00
    },
    {
      salary: 100457.49,
      personalAllowance: 9772
    },
    {
      salary: 119999.99,
      personalAllowance: 1
    },
    {
      salary: 250000.00,
      personalAllowance: 0
    }
  ],

    function (allowance) {
      it("calculates personal allowance for person 65 - 75 correctly", function () {
        expect(personalAllowanceCalculator(allowance.salary, 1, false)).toEqual(allowance.personalAllowance);
      });
    }
  );

  using('allowanceMap', [
    {
      salary: 27000.00,
      personalAllowance: 10660.00
    },
    {
      salary: 27100.00,
      personalAllowance: 10610.00
    },
    {
      salary: 28320.00,
      personalAllowance: 10000.00
    }
  ],

    function (allowance) {
      it("calculates personal allowance for person 75+ correctly", function () {
        expect(personalAllowanceCalculator(allowance.salary, 2, false, false)).toEqual(allowance.personalAllowance);
      });
    }
  );

  using('allowanceMap', [
    {
      salary: 100000.00,
      personalAllowance: 12230.00
    },
    {
      salary: 110000.00,
      personalAllowance: 7230.00
    },
    {
      salary: 100457.49,
      personalAllowance: 12002.00
    },
    {
      salary: 119999.99,
      personalAllowance: 2231.00
    },
    {
      salary: 250000.00,
      personalAllowance: 2230.00
    }
  ],

    function (allowance) {
      it("calculates personal allowance for blind person correctly", function () {
        expect(personalAllowanceCalculator(allowance.salary, 0, true)).toEqual(allowance.personalAllowance);
      });
    }
  );

  using('allowanceMap', [
    {
      salary: 27000.00,
      personalAllowance: 11476.50
    },
    {
      salary: 28320.00,
      personalAllowance: 10816.50
    },
    {
      salary: 28370.00,
      personalAllowance: 10814.00
    },
    {
      salary: 50000.00,
      personalAllowance: 10314.00
    }
  ],

    function (allowance) {
      it("calculates personal allowance for married person 75+ correctly", function () {
        expect(personalAllowanceCalculator(allowance.salary, 2, false, true)).toEqual(allowance.personalAllowance);
      });
    }
  );

  it("throws when salary is not a valid currency amount", function () {
    expect(function () {
      personalAllowanceCalculator(100.002, 0, false, false);
    }).toThrow();
  });

  it("throws when age group is outside valid range", function () {
    expect(function () {
      personalAllowanceCalculator(100.00, 4, false, false);
    }).toThrow();
  });

});
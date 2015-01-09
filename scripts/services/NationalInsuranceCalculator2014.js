taxCalculatorAppModule.factory('NationalInsuranceCalculator2014', function () {

  var ranges = [
    {
      start: 7956.00,
      end: 41865.00,
      multiplier: 0.12
    },
    {
      start: 41865.00,
      multiplier: 0.02
    },
  ];

  return function (salary) {

    return ranges.reduce(function (nationalInsuranceAmount, currentRange) {
      var salarySlice = salary;
      salarySlice -= currentRange.start;

      if(currentRange.end !== undefined) {
        var salaryOverEndRange = salary - currentRange.end;
        if(salaryOverEndRange > 0) {
          salarySlice -= salaryOverEndRange;
        }
      }

      if(salarySlice < 0) {
        return nationalInsuranceAmount;
      }

      //Times each item by 100 then divide by 100 to prevent floating
      //point errors
      nationalInsuranceAmount =
        (nationalInsuranceAmount * 100) +
        ((salarySlice * 100) * (currentRange.multiplier * 100) / 100);

      return (nationalInsuranceAmount / 100);
    }, 0.00);
  };
});

module.exports = function (
    taxAmountCalculator,
    nationalInsuranceCalculator,
    studentLoanCalculator,
    personalAllowanceCalculator,
    taxOutput,
    round
  ) {
    return function (input) {
      var output = taxOutput();

      output.grossSalary = input.grossSalary;

      output.personalAllowance = personalAllowanceCalculator(
        input.grossSalary,
        input.ageRange,
        input.isBlind,
        input.isMarried
      );

      if(!input.isExemptFromNationalInsurance) {
        output.nationalInsurance = nationalInsuranceCalculator(input.grossSalary);
      }

      if(input.isRepayingStudentLoan) {
        output.studentLoan = studentLoanCalculator(input.grossSalary);
      }

      output.tax = taxAmountCalculator(input.grossSalary, output.personalAllowance);

      if(input.pensionType === '%') {
        output.pension = (
          (input.pensionAmount / 100) * input.grossSalary
        );
      } else {
        output.pension = input.pensionAmount;
      }

      output.totalDeductions =
        round(output.tax
        + output.nationalInsurance
        + output.pension
        + output.studentLoan,
        12);

      output.netSalary = input.grossSalary - output.totalDeductions;

      return output;
    }
  };

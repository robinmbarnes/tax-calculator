taxCalculatorAppModule.factory('PersonalAllowanceCalculator2014',
  [
    'DecimalValidator',
    function (decimalValidator) {

      var AGE_GROUP_OVER_75 = 2;

      function applyProgressiveReduction(
        salary,
        baseAllowance,
        reductionThreshold
      ) {
        var amountOverReductionThreshold = salary - reductionThreshold;
        if(amountOverReductionThreshold > 0) {
          baseAllowance -= Math.floor(amountOverReductionThreshold / 2);
        }

        return (baseAllowance > 0 ? baseAllowance : 0);
      }

      function standardStrategy(salary) {
        return applyProgressiveReduction(salary, 10000, 100000);
      }

      function isBlindDecorator(allowance, isBlind) {
        return allowance + (isBlind ? 2230.00 : 0.00);
      }

      function calculateMarriedAllowance(salary, isMarried, ageGroup) {
        if(ageGroup !== AGE_GROUP_OVER_75 || !isMarried) {
          return 0.00;
        }

        if(salary <= 28320) {
          return 816.50;
        }

        if(salary <= 38370) {
          return (3140 + applyProgressiveReduction(salary, 5025, 28320)) / 10;
        }

        return 314.00;
      }

      var strategies = [];

      strategies.push(function ageUnder65Strategy(salary) {
        return standardStrategy(salary);
      });

      strategies.push(function age65To75Strategy(salary) {
        if(salary < 28000) {
          return 10000.00 + applyProgressiveReduction(salary, 500, 27000);
        }
        return standardStrategy(salary);
      });

      strategies.push(function age75PlusStrategy(salary) {
        if(salary < 27000) {
          return 10660.00;
        }
        if(salary <= 28320) {
          return 10000.00 + applyProgressiveReduction(salary, 660, 27000);
        }
        return standardStrategy(salary);
      });

      return function(salary, ageGroup, isBlind, isMarried) {

        if(!decimalValidator.isValid(salary)) {
          throw 'Salary is not valid currency amount';
        }

        var standardAllowance = strategies[ageGroup](salary);
        return isBlindDecorator(standardAllowance, isBlind)
          + calculateMarriedAllowance(salary, isMarried, ageGroup);
      }
    }
]);

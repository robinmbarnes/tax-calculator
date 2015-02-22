module.exports = function () {

  var threshold = 16910.00;
  var rate = 0.09;

  return function (salary) {
    var salaryOverThreshold = salary - threshold;
    if(salaryOverThreshold <= 0) {
      return 0;
    }
    return ((salaryOverThreshold * 100) * (rate * 100)) / 10000;
  }

};
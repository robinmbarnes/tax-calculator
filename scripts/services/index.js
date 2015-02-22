var app = require('angular').module('taxCalculatorApp');

app.factory('DecimalValidator', require('./DecimalValidator'));
app.factory('NationalInsuranceCalculator2014', require('./NationalInsuranceCalculator2014'));
app.factory('PersonalAllowanceCalculator2014', [
  'DecimalValidator',
  require('./PersonalAllowanceCalculator2014')
]);
app.factory('Round', require('./Round'));
app.factory('StudentLoanCalculator2014', require('./StudentLoanCalculator2014'));
app.factory('TaxAmountCalculator2014', require('./TaxAmountCalculator2014'));
app.factory('TaxCalculator2014', [
  'TaxAmountCalculator2014',
  'NationalInsuranceCalculator2014',
  'StudentLoanCalculator2014',
  'PersonalAllowanceCalculator2014',
  'TaxOutput',
  'Round',
  require('./TaxCalculator2014')
]);
app.factory('TaxInput', require('./TaxInput'));
app.factory('TaxOutput', require('./TaxOutput'));
var app = require('angular').module('taxCalculatorApp');

app.controller('MainController', [
  '$scope',
  'TaxCalculator2014',
  'TaxOutput',
  'TaxInput',
  require('./MainController')
]);

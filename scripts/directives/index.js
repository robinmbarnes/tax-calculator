var app = require('angular').module('taxCalculatorApp');

app.directive('rbDecimal', ['DecimalValidator', require('./rbDecimal')]);
app.directive('rbErrorClass', [require('./rbErrorClass')]);
app.directive('tcNavPill', [require('./tcNavPill')]);
app.directive('tcNavPills', ['$parse', require('./tcNavPills')]);
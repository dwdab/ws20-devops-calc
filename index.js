/**
 * Reverse Polish Notation Calculator
 */

var arguments = process.argv.slice(2);

var operand1 = arguments[0];
var operand2 = arguments[1];
var operator = arguments[2];

console.log('Calculating:', operand1, operand2, operator);

var result;

switch (operator) {
  case '+':
    result = operand1 + operand2;
  default:
    console.error('Not implemented:', operator);
}

console.log(result);

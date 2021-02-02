const addition = require('./operations/addition');
const multiplication = require('./operations/multiplication');
const division = require('./operations/division');
const modulo = require('./operations/modulo');
const power = require('./operations/power');

const operations = [addition, multiplication];

/**
 * Reverse Polish Notation Calculator
 */

let arguments = process.argv.slice(2);

let operand1 = Number(arguments[0]);
let operand2 = Number(arguments[1]);
let operator = arguments[2];
let result = null;

console.log('Calculating:', operand1, operand2, operator);

calculateSetOperation();

  function calculateSetOperation() {
    const operation = operations.find((e) => e.operator === operator);

    if (operation) {
      result = operation.fn(operand1, operand2);
    }

    if (result === null) {
      console.error('Not implemented or is not a mathematical operator:', operator);
      console.log('Supported operators are: + , - , / , * , p (power) and % (modulo).');
    } else {
      console.log('Result=', result);
    }
  }

// performs a subtraction of the second parameter from the first one.
function subtraction(x, y) {
  return x - y;
}

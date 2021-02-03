const addition = require('./operations/addition');
// TODO: subtraction - Stefan
const multiplication = require('./operations/multiplication'); // TODO: Erdem
const division = require('./operations/division'); // TODO: Sascha
const modulo = require('./operations/modulo');
const power = require('./operations/power'); // TODO: Kevin

const operations = [addition, modulo];

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

// selects the correct case and performs the correct calculation depending on the operands
function calculateSetOperation() {
  switch (operator) {
    case '-':
      result = subtraction(operand1, operand2);
      break;
    case '*':
      result = multiplication(operand1, operand2);
      break;
    case '/':
      result = division(operand1, operand2);
      break;
    case 'p':
      result = power(operand1, operand2);
      break;
  }

  const operation = operations.find((e) => e.operator === operator);

  if (operation) {
    result = operation.fn(operand1, operand2);
  }

  if (result === null) {
    console.error('Not implemented or is not a mathematical operator:', operator);
    console.log('Supported operators are: + , - , / , * , p (power) and % (modulo).');
  } else {
    console.log('Result:', result);
  }
}

// performs a subtraction of the second parameter from the first one.
function subtraction(x, y) {
  return x - y;
}

/**
 * Reverse Polish Notation Calculator
 */

let arguments = process.argv.slice(2);

let operand1 = Number(arguments[0]);
let operand2 = Number(arguments[1]);
let operator = arguments[2];
let result = 0;

console.log('Calculating:', operand1, operand2, operator);

calculateSetOperation();

// selects the correct case and performs the correct calculation depending on the operands
function calculateSetOperation() {
  switch (operator) {
    case '+':
      result = addition(operand1, operand2);
      break;
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
    case '%':
      result = modulo(operand1, operand2);
      break;
    default:
      console.error('Not implemented or is not a mathematical operator:', operator);
      console.log('Supported operators are: + , - , / , * , p (power) and % (modulo).');
  }

  console.log(result);
}

// performs an addition of two parameters
function addition(x, y) {
  return x + y;
}

// performs a subtraction of the second parameter from the first one.
function subtraction(x, y) {
  return x - y;
}

// performs a multiplication of two parameters
function multiplication(x, y) {
  return x * y;
}

// performs a division of first parameters by the second one
function division(x, y) {
  return x / y;
}

function power(x, y) {
  return x**y;
}

// performs a division of the two operators and returns the remainder
function modulo(x, y) {
  return x % y;
}

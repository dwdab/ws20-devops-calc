/**
 * Reverse Polish Notation Calculator
 */

let arguments = process.argv.slice(2);

let operand1 = parseInt(arguments[0], 10);
let operand2 = parseInt(arguments[1], 10);
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
      result = Math.pow(operand1, operand2);
      break;
    default:
      console.error('Not implemented or is not a mathematical operator:', operator);
      console.log('Supported operators are: + , - , / , * , p (power).');
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
function multiplication(x,y) {
  return x * y;
}

// performs a division of first parameters by the second one
function division(x,y) {
  return x / y;
}


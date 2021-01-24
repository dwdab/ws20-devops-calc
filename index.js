/**
 * Reverse Polish Notation Calculator
 */

var arguments = process.argv.slice(2);

var operand1 = toNumber(arguments[0], 10);
var operand2 = toNumber(arguments[1], 10);
var operator = arguments[2];
var result = 0;

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
    /*
    case '*':
      result = multiplication(operand1, operand2);
      break;
      case '/':
        result = division(operand1, operand2);
        break;
    */
    default:
      console.error('Not implemented:', operator);
  }
  console.log(result);
}

// returns the parsing from a string to a number
function toNumber(x) {
  return parseInt(x, 10);
}

// performs an addition of two parameters
function addition(x, y) {
  return x + y;
}

// performs a subtraction of the second parameter from the first one.
function subtraction(x, y) {
  return x - y;
}

/*
// performs a multiplication of two parameters
function multiplication(x,y) {
  return x * y;
}

// performs a division of first parameters by the second one
function division(x,y) {
  return x / y;
}
*/

/**
 * Reverse Polish Notation Calculator
 */

let arguments = process.argv.slice(2);

/* FIX #4 - Calculation is not possible with Strings */
let operand1 = parseInt(arguments[0], 10);
let operand2 = parseInt(arguments[1], 10);
/* _________________________________________________ */
let operator = arguments[2];

console.log('Calculating:', operand1, operand2, operator);

let result;

switch (operator) {
  case '+':
    result = operand1 + operand2;
    /* FIX #3 & #7 - Cases have to be breaked to end operations */
    break;
    /* ________________________________________________________ */
  /* FIX #6 - Missing operators added                      */
  case '-':
    result = operand1 - operand2;
    break;
  case '*':
    result = operand1 * operand2;
    break;
  case '/':
    result = operand1 / operand2;
    break;
  case 'p':
    result = Math.pow(operand1, operand2);
    break;
  /*                                                        */
  default:
    console.error('Not implemented or Is not a mathamatical operator :', operator);
    /* FIX #5 - Additional help for userfriendliness added           */
    console.log('Supported operators are: + , - , / , * , p (power).');
    /* _____________________________________________________________ */
    break;
}

console.log(result);

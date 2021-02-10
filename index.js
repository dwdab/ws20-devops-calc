const colors = require('colors/safe');

const addition = require('ws20-devops-calc-addition');
const power = require('ws20-devops-calc-power/power');
const modulo = require('ws20-devops-calc-modulo');
const multiplication = require('ws20-devops-calc-multiplication');
const division = require('ws20-devops-calc-division');

const subtraction = require('./operations/subtraction');

const operations = [addition, subtraction, multiplication, division, modulo, power];

/**
 * Reverse Polish Notation Calculator
 */

let args = process.argv.slice(2);

let operand1 = Number(args[0]);
let operand2 = Number(args[1]);
let operator = args[2];
let result = null;

console.log(colors.rainbow('Calculating:'), operand1, operand2, operator);

calculateSetOperation();

// selects the correct case and performs the correct calculation depending on the operands
function calculateSetOperation() {

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


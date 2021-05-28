const calculator = require('../code/calculator');

test('get the total of 2 numbers works', () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test('get the total of 2 integer works', () => {
  expect(calculator.add(2, -3)).toBe(-1);
});

test('get the difference of 2 numbers works', () => {
  expect(calculator.subtract(5, 3)).toBe(2);
});

test('get the difference of 2 numbers if first number < second works', () => {
  expect(calculator.subtract(3, 5)).toBe(-2);
});

test('get the product of 2 numbers works', () => {
  expect(calculator.multiply(2, 3)).toBe(6);
});

test('get the quotient of 2 numbers works', () => {
  expect(calculator.divide(6, 3)).toBe(2);
});

test('divide does not work if second number is 0', () => {
  expect(calculator.divide(6, 0)).toBe('ERROR. Cannot divide by 0.');
});

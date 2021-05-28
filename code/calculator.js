const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => (b ? a / b : 'ERROR. Cannot divide by 0.'),
};

module.exports = calculator;

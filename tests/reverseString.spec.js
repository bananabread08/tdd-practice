const reverseString = require('../code/reverseString');

test('does not work with other data types other than string or number', () => {
  expect(reverseString(['hello'])).toBe('ERROR. Not a String.');
});

test('works with blank input', () => {
  expect(reverseString('')).toBe('');
});

test('works with numbers', () => {
  expect(reverseString(123456789)).toBe('987654321');
});

test('works with a single string', () => {
  expect(reverseString('orange')).toBe('egnaro');
});

test('works with a collection of string', () => {
  expect(reverseString('hail hydra')).toBe('ardyh liah');
});

test('works with strings with capital letters and numbers', () => {
  expect(reverseString('Hail4 Hydra5')).toBe('5ardyH 4liaH');
});

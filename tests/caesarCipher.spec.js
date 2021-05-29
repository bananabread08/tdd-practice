const caesarCipher = require('../code/caesarCipher');

test('does not shift symbols, quotation marks, and spaces', () => {
  expect(caesarCipher('attack on titan!', 5)).toBe('fyyfhp ts ynyfs!');
});

test('retain uppercase/lowercase', () => {
  expect(caesarCipher('Attack On Titan!', 5)).toBe('Fyyfhp Ts Ynyfs!');
});

test('negative shift', () => {
  expect(caesarCipher('Mjqqt, Btwqi!', -5)).toBe('Hello, World!');
});

test('z => a wrapping', () => {
  expect(caesarCipher('Z', 1)).toBe('A');
});

test('a => z wrapping', () => {
  expect(caesarCipher('a', -1)).toBe('z');
});

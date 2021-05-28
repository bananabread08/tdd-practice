const capitalize = require('../code/capitalize');

test('does not work with Numbers', () => {
  expect(capitalize(123456)).toBe('ERROR. Not a String');
});

test('does not work with data types that is not a string', () => {
  expect(capitalize(['hello'])).toBe('ERROR. Not a String');
});

test('works with blank input', () => {
  expect(capitalize('')).toBe('');
});
test('works with short strings', () => {
  expect(capitalize('area')).toBe('Area');
});

test('works with a long sentence', () => {
  expect(capitalize('my very eager mother just served us nine pizzas')).toBe(
    'My very eager mother just served us nine pizzas'
  );
});

test('works with strings already capitalized', () => {
  expect(capitalize('Orange')).toBe('Orange');
});

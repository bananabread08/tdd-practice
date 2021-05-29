const arrayAnalyze = require('../code/arrayAnalyze');

test('one element array', () => {
  expect(arrayAnalyze([6])).toEqual({
    average: 6,
    min: 6,
    max: 6,
    length: 1,
  });
});

test('set of positive numbers', () => {
  expect(arrayAnalyze([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test('also on negative numbers', () => {
  expect(arrayAnalyze([-1, 9, 3, -4, 2, 6])).toEqual({
    average: 2.5,
    min: -4,
    max: 9,
    length: 6,
  });
});

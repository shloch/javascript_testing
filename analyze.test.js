const functions = require('./analyze');

test('takes an array of numbers and returns an object', () => {
  expect(functions([1,2,3,4,5])).toEqual({ average: 3, min: 1, max: 5, length: 5 });
});

test('takes an array of numbers and returns an object with property average, min, max, length ', () => {
  expect(functions([1,2,3,4,5])).toHaveProperty('average')
  expect(functions([1,2,3,4,5])).toHaveProperty('min')
  expect(functions([1,2,3,4,5])).toHaveProperty('max')
  expect(functions([1,2,3,4,5])).toHaveProperty('length')
});

test('takes an array of numbers and returns an object with property average, min, max, length with their values', () => {
  expect(functions([1,2,3,4,5])).toHaveProperty('average', 3)
  expect(functions([1,2,3,4,5])).toHaveProperty('min', 1)
  expect(functions([1,2,3,4,5])).toHaveProperty('max', 5)
  expect(functions([1,2,3,4,5])).toHaveProperty('length', 5)
});
const functions = require('./calculator');

test('ADDITION: 2+2 should be 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

test('ADDITION: 3+2 should be 5', () => {
  expect(functions.add(3, 2)).toBe(5);
});

test('SUBTRACTION: 0 - 2 should be -2', () => {
  expect(functions.subtract(0, 2)).toBe(-2);
});

test('DIVISION: 1000 / 250 should be 4', () => {
  expect(functions.divide(1000, 250)).toBe(4);
});

test('DIVISION: 7 / 2 should be 3.5', () => {
  expect(functions.divide(7, 2)).toBe(3.5);
});

test('DIVISION: 2 / 3 should be closed to  0.66', () => {
  expect(functions.divide(2, 3)).toBeCloseTo(0.6666666666666665);
});

test('MULTIPLICATION: 9 * 1000 should be 9000', () => {
  expect(functions.multiply(9, 1000)).toBeCloseTo(9000);
});



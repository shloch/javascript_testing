const capitalize = require('./capitalize');

test('return string with first character capitalized', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('return string with first character capitalized', () => {
  expect(capitalize('micrOverse')).toBe('MicrOverse');
});
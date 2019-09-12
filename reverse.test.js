const reverse = require('./reverse');

test('return string reversed', () => {
  expect(reverse('hello')).toBe('olleh');
});

test('return string with first character capitalized', () => {
  expect(capitalize('micrOverse')).toBe('esrevOrcim');
});
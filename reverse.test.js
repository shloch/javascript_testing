const reverse = require('./reverse');

test('return "Hello" reversed to "olleh"', () => {
  expect(reverse('hello')).toBe('olleh');
});

test('return "micrOverse" reversed to "esrevOrcim"', () => {
  expect(reverse('micrOverse')).toBe('esrevOrcim');
});
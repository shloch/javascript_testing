const caesarCipher = require('./caesarCipher');

test('"wall" should return "xbmm" if shift=1', () => {
  expect(caesarCipher('wall', 1)).toBe('xbmm');
});
const caesarCipher = require('./caesarCipher');

test('ALL CARACTERS(a-z): Ciphers lowercase alphabet as expected', () => {
  expect(caesarCipher('abcdefghijklmnopqrstuvwxyz', 1)).toBe('bcdefghijklmnopqrstuvwxyza');
  expect(caesarCipher('abcdefghijklmnopqrstuvwxyz', 4)).toMatch(/^[a-z]+$/);
});

test('ALL CARACTERS(A-Z): Ciphers upperrcase alphabet as expected', () => {
  expect(caesarCipher('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 5)).toBe('FGHIJKLMNOPQRSTUVWXYZABCDE');
  expect(caesarCipher('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 1)).toMatch(/^[A-Z]+$/);
});

test('Ciphers upperrcase+lowercase alphabet as expected', () => {
  expect(caesarCipher('ABCDabcd', 3)).toMatch(/^[A-Za-z]+$/);
});

test('CIPHER WITH PONCTUATION: "wall!!!" should return "xbmm!!!" ', () => {
  expect(caesarCipher('wall!!!', 1)).toBe('xbmm!!!');
  expect(caesarCipher('wall!!!', 1)).toMatch(/[A-Za-z]{4}!!!/);
});

test('SPECIAL CARACTER CIPHER: "£$%&#" should remain same "$%&#" (have no ALPHABET)', () => {
  expect(caesarCipher('£$%&#', 13)).not.toMatch(/^[A-Za-z]+$/);
});
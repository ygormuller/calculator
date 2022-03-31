const calculadora = require('../components/Calculadora');
test('adds 2 + 4 to equal 6', () => {
  expect(calculadora(2, 4)).toBe(6);
});
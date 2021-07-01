const assert = require('assert');
const circle = require('../src/circle');

describe('4 - Implemente os casos de teste para a função `circle`', () => {
  it('Verifica se ao receber um raio, a função `circle` retorna um objeto contedos os valores esperados', () => {
    assert.strictEqual(typeof(circle(2)), 'object');
    assert.strictEqual((Object.keys(circle(3)).length), 3);
    assert.strictEqual(circle(), undefined);
    assert.strictEqual(circle(2).circumference, 12.56);
    assert.strictEqual(circle(3).area, 28.259999999999998);

    let radius3 = { radius: 3, area: 28.259999999999998, circumference: 18.84 };
    assert.deepStrictEqual(circle(3), radius3);
  });
});

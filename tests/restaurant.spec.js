const assert = require('assert');
const createMenu = require('../src/restaurant');
 
describe('9 - Implemente os casos de teste e a função `createMenu`', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {

    const objetoRetornado = createMenu();
    assert.strictEqual(typeof (objetoRetornado.fetchMenu), 'function');

    const objetoRetornado2 = createMenu({ food: {}, drink: {} });
    assert.deepStrictEqual(Object.keys(objetoRetornado2.fetchMenu()), ['food', 'drink']);

    const objetoRetornado3 = createMenu({ food: {}, drink: {} });
    assert.deepStrictEqual(objetoRetornado3.fetchMenu(), { food: {}, drink: {} });

    const objetoRetornado4 = createMenu({ food: {}, drink: {} });
    assert.deepStrictEqual(objetoRetornado4.consumption, []);

    const objetoRetornado5 = createMenu({ food: {}, drink: {} });
    objetoRetornado5.order('coxinha');
    assert.strictEqual(objetoRetornado5.consumption.includes('coxinha'), true);

    const objetoRetornado6 = createMenu({ food: {}, drink: {} });
    objetoRetornado6.order('coxinha');
    objetoRetornado6.order('agua');
    objetoRetornado6.order('sopa');
    objetoRetornado6.order('sashimi');
    assert.deepStrictEqual(objetoRetornado6.consumption, ["coxinha", "agua", "sopa", "sashimi"]);

    const objetoRetornado7 = createMenu({ food: {}, drink: {} });
    objetoRetornado7.order('coxinha');
    objetoRetornado7.order('agua');
    objetoRetornado7.order('coxinha');
    assert.deepStrictEqual(objetoRetornado7.consumption, ["coxinha", "agua", "coxinha"]);

    const objetoRetornado8 = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drinks: {'agua': 3.9, 'cerveja': 6.9} });
    objetoRetornado8.order('coxinha');
    objetoRetornado8.order('agua');
    objetoRetornado8.order('coxinha');
    assert.deepStrictEqual(objetoRetornado8.pay(), 12.870000000000001)
  });
});

const vqv = (nome, idade) => {
  if (typeof (nome) === 'string' && typeof (idade) === 'number') {
    return `Oi, meu nome é ${nome}!
Tenho ${idade} anos,
trabalho na Trybe e mando muito em programação!
#VQV!`;
  }
  return undefined;
};

module.exports = vqv;

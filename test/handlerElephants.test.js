const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Testa se handlerElephants retorna undefined', () => {
    expect(handlerElephants()).toBe(undefined);
  });
  it('Testa se não aceita parametro que não seja string', () => {
    expect(handlerElephants(5)).toEqual(
      'Parâmetro inválido, é necessário uma string',
    );
  });
  it('Testa se retorna a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toEqual(4);
  });
  it('Testa se retorna os nomes dos elefantes', () => {
    expect(handlerElephants('names')).toEqual([
      'Ilana',
      'Orval',
      'Bea',
      'Jefferson',
    ]);
  });
  it('Testa se retorna a média das idades dos elefantes', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });
  it('Testa se retorna null', () => {
    expect(handlerElephants('1223')).toBeNull();
  });
  it('Testa se retorna o valor de uma chave', () => {
    expect(handlerElephants('popularity')).toEqual(5);
  });
});

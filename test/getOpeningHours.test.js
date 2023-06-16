const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Teste se não passar parâmetro', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('Teste se o zoo na segunda não abre', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toEqual('The zoo is closed');
  });
  it('Teste se o zoo está aberto', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toEqual('The zoo is open');
  });
  it('Teste se o zoo está fechado', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toEqual(
      'The zoo is closed',
    );
  });
  it('Teste se o parametro dia está incorreto', () => {
    expect(() => {
      getOpeningHours('Thu', '09:00-AM');
    }).toThrow('The day must be valid. Example: Monday');
  });
  it('Teste se o parametro hora está incorreto letras', () => {
    expect(() => {
      getOpeningHours('Friday', '09:00-ZM');
    }).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('Teste se o parametro hora está incorreto numeros', () => {
    expect(() => {
      getOpeningHours('Saturday', 'C9:00-AM');
    }).toThrow('The hour should represent a number');
  });
  it('Teste se o parametro hora está incorreto minutos', () => {
    expect(() => {
      getOpeningHours('Saturday', '09:c0-AM');
    }).toThrow('The minutes should represent a number');
  });
  it('Teste se o parametro hora está no formato correto', () => {
    expect(() => {
      getOpeningHours('Monday', '13:00-AM');
    }).toThrow('The hour must be between 0 and 12');
  });
  it('Teste se o parametro hora, minutos está no formato correto', () => {
    expect(() => {
      getOpeningHours('Tuesday', '09:60-AM');
    }).toThrow('The minutes must be between 0 and 59');
  });
  it('Teste se o zoo está aberto', () => {
    expect(getOpeningHours('Tuesday', '12:00-PM')).toEqual('The zoo is open');
  });
});

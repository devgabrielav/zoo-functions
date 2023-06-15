const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  const novoArray = {};
  if (animal === undefined) {
    data.species.forEach((specie) => {
      novoArray[specie.name] = specie.residents.length;
    });
    return novoArray;
  }
  if (Object.keys(animal).length === 1) {
    const quantity = data.species.find(
      (specie) => specie.name === animal.species,
    );
    return quantity.residents.length;
  }
  const animals = data.species.find((specie) => specie.name === animal.species);
  const quantidade = animals.residents.filter(
    (animale) => animale.sex === animal.sex,
  );
  return quantidade.length;
};

module.exports = countAnimals;

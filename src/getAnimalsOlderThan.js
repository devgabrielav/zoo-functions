const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const animalS = data.species.find((animale) => animale.name === animal);
  return animalS.residents.every((resident) => resident.age >= age);
};

console.log(getAnimalsOlderThan('bears', 4));
module.exports = getAnimalsOlderThan;

const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const oldest = [];
  const getEmployee = data.employees.find((person) => person.id === id);
  const findSpecie = getEmployee.responsibleFor.find((cares) => cares);
  const animals = data.species.find((specie) => specie.id === findSpecie);
  const animalsR = animals.residents.reduce((a, b) => (a.age > b.age ? a : b));
  const { name, sex, age } = animalsR;
  oldest.push(name, sex, age);
  return oldest;
};

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = getOldestFromFirstSpecies;

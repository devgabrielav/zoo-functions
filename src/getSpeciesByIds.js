const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) =>
  data.species
    .filter((specie) => ids
      .some((id) => specie.id === id));

module.exports = getSpeciesByIds;

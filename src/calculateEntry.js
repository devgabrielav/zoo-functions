const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const criancas = entrants.filter((entrant) => entrant.age < 18);
  const adultos = entrants.filter(
    (entrant) => entrant.age >= 18 && entrant.age < 50,
  );
  const seniores = entrants.filter((entrant) => entrant.age >= 50);
  return {
    child: criancas.length,
    adult: adultos.length,
    senior: seniores.length,
  };
};

const calculateEntry = (entrants) => {
  if (entrants === undefined) {
    return 0;
  }
  const { child } = data.prices;
  const { adult } = data.prices;
  const { senior } = data.prices;
  const total = countEntrants(entrants).child * child
  + countEntrants(entrants).adult * adult
  + countEntrants(entrants).senior * senior;
  return total;
};

module.exports = { calculateEntry, countEntrants };

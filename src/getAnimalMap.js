const data = require('../data/zoo_data');

const animals = data.species;
const dNE = [];
const dNW = [];
const dSE = [];
const dSW = [];
const dNEA = [];
const dNWA = [];
const dSEA = [];
const dSWA = [];
const dNEB = [];
const dNWB = [];
const dSEB = [];
const dSWB = [];
const dNEC = [];
const dNWC = [];
const dSEC = [];
const dSWC = [];

const gera = (region) => animals.filter((specie) => specie.location === region);
const geraUndefinedAndSexOnly = () => ({
  NE: gera('NE').map((animal) => animal.name),
  NW: gera('NW').map((animal) => animal.name),
  SE: gera('SE').map((animal) => animal.name),
  SW: gera('SW').map((animal) => animal.name),
});

const geraWithIncludeNamesOnly = (options) => {
  if (options.sorted) {
    gera('NE').forEach((a) => dNEA.push({ [a.name]: a.residents.map((r) => r.name).sort() }));
    gera('NW').forEach((a) => dNWA.push({ [a.name]: a.residents.map((r) => r.name).sort() }));
    gera('SE').forEach((a) => dSEA.push({ [a.name]: a.residents.map((r) => r.name).sort() }));
    gera('SW').forEach((a) => dSWA.push({ [a.name]: a.residents.map((r) => r.name).sort() }));
    return { NE: dNEA, NW: dNWA, SE: dSEA, SW: dSWA };
  }
  gera('NE').forEach((a) => dNE.push({ [a.name]: a.residents.map((r) => r.name) }));
  gera('NW').forEach((a) => dNW.push({ [a.name]: a.residents.map((r) => r.name) }));
  gera('SE').forEach((a) => dSE.push({ [a.name]: a.residents.map((r) => r.name) }));
  gera('SW').forEach((a) => dSW.push({ [a.name]: a.residents.map((r) => r.name) }));
  return { NE: dNE, NW: dNW, SE: dSE, SW: dSW };
};

const geraWithIncludeNamesAndSex = (o) => {
  if (o.sorted) {
    gera('NE').forEach((a) => dNEC.push({ [a.name]: a.residents.filter((r) => r.sex === o.sex)
      .map((re) => re.name).sort() }));
    gera('NW').forEach((a) => dNWC.push({ [a.name]: a.residents.filter((r) => r.sex === o.sex)
      .map((re) => re.name).sort() }));
    gera('SE').forEach((a) => dSEC.push({ [a.name]: a.residents.filter((r) => r.sex === o.sex)
      .map((re) => re.name).sort() }));
    gera('SW').forEach((a) => dSWC.push({ [a.name]: a.residents.filter((r) => r.sex === o.sex)
      .map((re) => re.name).sort() })); return { NE: dNEC, NW: dNWC, SE: dSEC, SW: dSWC };
  }
  gera('NE').forEach((a) => dNEB.push({ [a.name]: a.residents.filter((r) => r.sex === o.sex)
    .map((re) => re.name) }));
  gera('NW').forEach((a) => dNWB.push({ [a.name]: a.residents.filter((r) => r.sex === o.sex)
    .map((re) => re.name) }));
  gera('SE').forEach((a) => dSEB.push({ [a.name]: a.residents.filter((r) => r.sex === o.sex)
    .map((re) => re.name) }));
  gera('SW').forEach((a) => dSWB.push({ [a.name]: a.residents.filter((r) => r.sex === o.sex)
    .map((re) => re.name) })); return { NE: dNEB, NW: dNWB, SE: dSEB, SW: dSWB };
};
const getAnimalMap = (options) => {
  if (options && options.includeNames) {
    if (!options.sex) {
      return geraWithIncludeNamesOnly(options);
    }
    return geraWithIncludeNamesAndSex(options);
  }
  return geraUndefinedAndSexOnly();
};

module.exports = getAnimalMap;

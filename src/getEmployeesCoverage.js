const data = require('../data/zoo_data');

const geraObjetos = () =>
  data.employees.map((employee) => {
    const responsaveis = employee.responsibleFor.filter((id) => id);
    const objeto = {
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species: data.species
        .filter((animal) => animal.id === responsaveis.find((id) => id === animal.id))
        .map((animalN) => animalN.name),
      locations: data.species
        .filter((animal) => animal.id === responsaveis.find((id) => id === animal.id))
        .map((animalN) => animalN.location),
    };
    return objeto;
  });

const getEmployeesCoverage = (obj) => {
  if (obj !== undefined) {
    const findE = data.employees
      .find((employeeF) => employeeF.id === obj.id
    || employeeF.firstName === obj.name
    || employeeF.lastName === obj.name);
    if (findE) {
      const objetos = geraObjetos()
        .filter((funcionario) => funcionario.fullName.includes(findE.firstName)
      || funcionario.id === findE.id);
      return objetos.find((person) => person);
    }
    throw new Error('Informações inválidas');
  }
  return geraObjetos();
};

module.exports = getEmployeesCoverage;

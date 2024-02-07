const data = require('../data/zoo_data');

const isManager = (id) =>
  data.employees.some((employee) =>
    employee.managers.find((managerId) => managerId === id));

const getRelatedEmployees = (managerId) => {
  const employeeManager = [];
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  data.employees
    .filter((employee) => employee.managers.includes(managerId))
    .forEach((employee) =>
      employeeManager.push(`${employee.firstName} ${employee.lastName}`));
  return employeeManager;
};

module.exports = { isManager, getRelatedEmployees };

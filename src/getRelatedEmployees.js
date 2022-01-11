const data = require('../data/zoo_data');

const { employees } = data;

const isManager = (id) => employees.some((employee) => employee.managers.includes(id));

const getRelatedEmployees = (manId) => {
  if (!isManager(manId)) throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  return employees.reduce((acc, cur) => {
    if (cur.managers.includes(manId)) {
      acc.push(`${cur.firstName} ${cur.lastName}`);
    }
    return acc;
  }, []);
};

module.exports = { isManager, getRelatedEmployees };

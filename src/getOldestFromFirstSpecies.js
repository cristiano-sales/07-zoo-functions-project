//  Ref.: Rafael França

const { employees, species } = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const arrayResponsibleFor = employees.find((employee) => employee.id === id).responsibleFor;
  const residentsOfFirstSpecie = species.find(
    (specie) => specie.id === arrayResponsibleFor[0],
  ).residents;
  return Object.values( //  para retornar uma array com os valores das chaves e não todo o objeto
    residentsOfFirstSpecie.reduce((previous, next) => (previous.age > next.age ? previous : next)),
  );
};

module.exports = getOldestFromFirstSpecies;

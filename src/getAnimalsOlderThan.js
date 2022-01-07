const data = require('../data/zoo_data');

const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animalSpecie, minimumAge) {
  const found = species.find((specie) => specie.name === animalSpecie);
  return found.residents.every((resident) => resident.age >= minimumAge);
}

module.exports = getAnimalsOlderThan;

//  ref.: Yuri Carvalho

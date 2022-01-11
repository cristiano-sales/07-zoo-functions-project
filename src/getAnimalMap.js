const { species } = require('../data/zoo_data');
//  const data = require('../data/zoo_data');

//  Sem a opção includeNames especificada, retorna animais categorizados por localização;

const animalsByLocal = () =>
  species.reduce((acc, { name, location }) => {
    if (!acc[location]) acc[location] = [];
    acc[location].push(name);
    return acc;
  }, {});

function getAnimalMap(options) {
}

console.log(animalsByLocal());

module.exports = getAnimalMap;

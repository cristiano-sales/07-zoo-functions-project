//  const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return species.reduce((acc, { name, residents }) => {
      acc[name] = residents.length;
      return acc;
    }, {});
  }
  if (!animal.sex) {
    return species.find((specie) => specie.name === animal.specie).residents.length;
  }
  return species.find((specie) => specie.name === animal.specie).residents
    .reduce((acc, cur) => {
      if (animal.sex === cur.sex) {
        return acc + 1;
      }
      return acc;
    }, 0);
}

console.log(countAnimals({ specie: 'penguins' }));

module.exports = countAnimals;

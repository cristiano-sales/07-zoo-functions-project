const data = require('../data/zoo_data');

const { species } = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => species.filter((especie) => ids.includes(especie.id));

module.exports = getSpeciesByIds;

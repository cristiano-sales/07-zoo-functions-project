//  Ref.: Rafael França

//  const data = require('../data/zoo_data');
const { hours, species } = require('../data/zoo_data');

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

//  'sem parâmetros, retorna os horários para cada dia e quais animais estarão disponíveis'
//  'caso os parâmetros não seja um animal e dia, retorna um objeto com os horários do dia e os animais em exibição'
//  'se "Monday" for passado por parâmetro, deverá informar que o zoológico está fechado'
const weeklySchedule = () => { // horário semanal
  days.reduce((acc, currentDay) => {
    const scheduleDay = acc; // questão de lint, cópia do acc
    if (currentDay === 'Monday') {
      scheduleDay[currentDay] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    } else {
      scheduleDay[currentDay] = {
        officeHour: `Open from ${hours[currentDay].open}am until ${hours[currentDay].close}pm`,
        exhibition: species
          .filter(({ availability }) => availability.includes(currentDay))
          .map(({ name }) => name),
      };
    }
    return scheduleDay;
  }, {});
};

//  'se um dia for passado, retorna somente o horário daquele expediente e os animais em exibição no dia'
//  'se "Monday" for passado por parâmetro, deverá informar que o zoológico está fechado'
const scheduleOfTheDay = (day) => {
  const valueOfDayKey = {}; // Pois a função retornará um objeto cujo a chave 'day' conterá o objeto 'valueOfDayKey' como valor

  if (day === 'Monday') {
    valueOfDayKey[day] = {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    };
    return valueOfDayKey;
  }

  valueOfDayKey[day] = {
    officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
    exhibition: species
      .filter((specie) => specie.availability.includes(day)) // sem Object Destructuring
      .map(({ name }) => name), // com Object Destructuring
  };
  return valueOfDayKey;
};

//  'se for passado um animal, deverá retornar um array com os dias em que ele está em exibição'
const scheduleBySpecies = (specie) =>
  species.find(({ name }) => name === specie).availability; // disponibilidade (dias nos quais determinada espécie está disponível)

// Requisito: getSchedule
const getSchedule = (scheduleTarget) => { // target: alvo
  if (species.some(({ name }) => name === scheduleTarget)) return scheduleBySpecies();
  if (days.includes(scheduleTarget)) return scheduleOfTheDay();
  if (!scheduleTarget) return weeklySchedule();
};

module.exports = getSchedule;

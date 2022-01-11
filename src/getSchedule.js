// Ref.: Rafael França
// Ref.: Eduardo Souza

const { hours, species } = require('../data/zoo_data');

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

//  'sem parâmetros, retorna os horários para cada dia e quais animais estarão disponíveis'
//  'caso os parâmetros não seja um animal e dia, retorna um objeto com os horários do dia e os animais em exibição'
//  'se "Monday" for passado por parâmetro, deverá informar que o zoológico está fechado'
function weeklySchedule() { // horário semanal
  return days.reduce((acc, currentDay) => {
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
}

//  'se for passado um animal, deverá retornar um array com os dias em que ele está em exibição'
const scheduleBySpecies = (specie) =>
  species.find(({ name }) => name === specie).availability; // disponibilidade (dias nos quais determinada espécie está disponível)

// Requisito: getSchedule
const getSchedule = (scheduleTarget = false) => { // target: alvo
  if (species.some(({ name }) => name === scheduleTarget)) return scheduleBySpecies(scheduleTarget);
  if (days.includes(scheduleTarget)) { // 'se um dia for passado, retorna somente o horário daquele expediente e os animais em exibição no dia'
    const obj = {};
    obj[scheduleTarget] = weeklySchedule()[scheduleTarget];
    return obj;
  }
  return weeklySchedule();
};

module.exports = getSchedule;

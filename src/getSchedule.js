const data = require('../data/zoo_data');

const makeSchedule = () => {
  const schedule = {};
  Object.keys(data.hours).forEach((weekDay) => {
    if (weekDay !== 'Monday') {
      const { open, close } = data.hours[weekDay];
      schedule[weekDay] = {
        officeHour: `Open from ${open}am until ${close}pm`,
        exhibition: data.species
          .filter((specie) => specie.availability.includes(weekDay))
          .map((specie) => specie.name),
      };
    }
    schedule.Monday = {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    };
  });
  return schedule;
};

const getSchedule = (scheduleTarget) => {
  const days = makeSchedule();
  const specificDay = Object.keys(makeSchedule()).find((day) => day === scheduleTarget);
  const specificAnimal = data.species.find((specie) => specie.name === scheduleTarget);

  if (specificDay) {
    const specificSchedule = {};
    const daySchedule = makeSchedule()[scheduleTarget];
    specificSchedule[scheduleTarget] = daySchedule;
    return specificSchedule;
  }
  if (specificAnimal) {
    const especie = data.species.find(
      (specie) => specie.name === scheduleTarget,
    );
    return especie.availability;
  }
  return days;
};

module.exports = getSchedule;

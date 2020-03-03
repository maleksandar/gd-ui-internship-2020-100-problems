/**
 * @param {Array<Object>} schedule
 * @return {Array<string>}
 * @description "Formats a working hours schedule in a human-friendly way."
 */

export function formatWorkingHours(schedule) {
  if (schedule.length === 0) {
    return [];
  }

  const daysOfTheWeek = {
    mon: 1,
    tue: 2,
    wed: 3,
    thu: 4,
    fri: 5,
    sat: 6,
    sun: 7,
  };

  const humanFriendlySchedule = [];

  const sortedSchedule =
    [...schedule].sort((a, b) => daysOfTheWeek[a.day] - daysOfTheWeek[b.day]);

  let [day, from, to] =
   [sortedSchedule[0].day, sortedSchedule[0].from, sortedSchedule[0].to];

  for (let i = 1; i < sortedSchedule.length; i++) {
    while (i < sortedSchedule.length &&
        from === sortedSchedule[i].from &&
        to === sortedSchedule[i].to) {
      i++;
    }

    if (i < sortedSchedule.length) {
      if (day !== sortedSchedule[i - 1].day) {
        humanFriendlySchedule.push(
            getHumanFriendlyData(day, sortedSchedule[i - 1].day, from, to)
        );
      } else {
        humanFriendlySchedule.push(
            getHumanFriendlyData(day, undefined, from, to)
        );
      }

      [day, from, to] =
        [sortedSchedule[i].day, sortedSchedule[i].from, sortedSchedule[i].to];
    } else {
      humanFriendlySchedule.push(
          getHumanFriendlyData(day, undefined, from, to)
      );
      break;
    }
  }

  humanFriendlySchedule.push(
      getHumanFriendlyData(day, undefined, from, to)
  );

  return humanFriendlySchedule;
}

function getHumanFriendlyData(fromDay, toDay, fromHour, toHour) {
  if (toDay) {
    // eslint-disable-next-line max-len
    return `${fromDay.toUpperCase()} - ${toDay.toUpperCase()}: ${fromHour} - ${toHour}`;
  } else {
    return `${fromDay.toUpperCase()}: ${fromHour} - ${toHour}`;
  }
}

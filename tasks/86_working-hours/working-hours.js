export function formatWorkingHours(workdays) {
  let daysOfWeek = {
    mon: 1,
    tue: 2,
    wed: 3,
    thu: 4,
    fri: 5,
    sat: 6,
    sun: 7,
  };

  if (workdays === []) {
    return [];
  }

  let result = [];
  let scedule = {};

  let workdayArraySorted = workdays.sort((a, b) =>
    daysOfWeek[a.day] - daysOfWeek[b.day]);

  workdayArraySorted.forEach((value) => {
    if (scedule.fromTime !== value.from ||
      scedule.toTime !== value.to) {
      scedule = {
        fromDay: value.day,
        toDay: null,
        fromTime: value.from,
        toTime: value.to,
      };
      result.push(scedule);
    } else {
      scedule.toDay = value.day;
    }
  });

  return formatData(result);
}

function formatData(data) {
  return data.map((item) => {
    if (item.toDay) {
      return item.fromDay.toUpperCase() + ' - ' + item.toDay.toUpperCase() +
        ': ' + item.fromTime + ' - ' + item.toTime;
    } else {
      return item.fromDay.toUpperCase() +
        ': ' + item.fromTime + ' - ' + item.toTime;
    }
  });
}

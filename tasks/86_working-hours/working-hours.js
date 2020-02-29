export function formatWorkingHours(INPUT_DATA) {
  const sortOrder = {
    mon: 1,
    tue: 2,
    wed: 3,
    thu: 4,
    fri: 5,
    sat: 6,
    sun: 7,
  };
  const INPUT_DATA_SORTED = [...INPUT_DATA].sort((a, b) => {
    return sortOrder[a.day] - sortOrder[b.day];
  });

  let prevSchedule = {};
  const OUTPUT_DATA = [];
  INPUT_DATA_SORTED.forEach((schedule) => {
    if (prevSchedule.fromTime !== schedule.from ||
        prevSchedule.toTime !== schedule.to) {
      prevSchedule = {
        fromDay: schedule.day,
        toDay: null,
        fromTime: schedule.from,
        toTime: schedule.to,
      };
      OUTPUT_DATA.push(prevSchedule);
    } else {
      prevSchedule.toDay = schedule.day;
    }
  });
  return getFormatedData(OUTPUT_DATA);
}

function getFormatedData(outputData) {
  return outputData.map((item) => {
    if (item.toDay) {
      return item.fromDay.toUpperCase() + ' - ' + item.toDay.toUpperCase() +
          ': ' + item.fromTime + ' - ' + item.toTime;
    } else {
      return item.fromDay.toUpperCase() +
          ': ' + item.fromTime + ' - ' + item.toTime;
    }
  });
}

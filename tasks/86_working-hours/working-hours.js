

export function formatWorkingHours(workingHours) {
  const daysOfTheWeek = {
    mon: 0,
    tue: 1,
    wed: 2,
    thu: 3,
    fri: 4,
    sat: 5,
    sun: 6,
  };

  let ret = [];

  let workingHoursSorted = workingHours.sort(
      (a, b) => daysOfTheWeek[a.day] - daysOfTheWeek[b.day]
  );

  let prevfrom = '';
  let prevto = '';
  let firstDay = '';
  let lastDay = '';

  workingHoursSorted.forEach((day, index) => {
    if (prevfrom === '') {
      prevfrom = day.from;
      prevto = day.to;
      firstDay = day.day;
    } else {
      if (prevfrom === day.from && prevto === day.to) {
        lastDay = day.day;
      } else {
        if (lastDay === '') {
          ret.push(firstDay.toUpperCase() + ': '
            + prevfrom + ' - ' + prevto );
        } else {
          ret.push(firstDay.toUpperCase() + ' - ' + lastDay.toUpperCase()+ ': '
            + prevfrom + ' - ' + prevto );
        }
        prevfrom = day.from;
        prevto = day.to;
        firstDay = day.day;
        lastDay = '';
      }
    }

    if (index === workingHoursSorted.length -1) {
      if (lastDay === '') {
        ret.push(firstDay.toUpperCase() + ': '
              + prevfrom+ ' - ' + prevto );
      } else {
        ret.push(firstDay.toUpperCase() + ' - ' + lastDay.toUpperCase()+ ': '
              + prevfrom + ' - ' + prevto );
      }
    }
  });

  return ret;
}

export const formatWorkingHours = (workingHours) => {
  if (workingHours.length === 0) {
    return [];
  }

  let formatted = [];

  workingHours.forEach((weekDay) => {
    const day = weekDay.day.toUpperCase();
    const hours = `${weekDay.from} - ${weekDay.to}`;
    formatted.push(`${day}: ${hours}`);
  });

  formatted.sort((a, b) => {
    const currDay = a.split(':')[0];
    const nextDay = b.split(':')[0];
    return WEEK_DAYS.indexOf(currDay) > WEEK_DAYS.indexOf(nextDay);
  });

  let prevSplit = formatted[0].split(':');
  let prevDay = prevSplit[0];
  let prevHours = prevSplit.slice(1).join(':').trim();

  let start = prevDay;
  let end = '';
  let result = [];

  for (let i = 1; i < formatted.length; i++) {
    const currSplit = formatted[i].split(':');
    const currDay = currSplit[0];
    const currHours = currSplit.slice(1).join(':').trim();

    if (prevHours === currHours) {
      end = currDay;
      continue;
    }

    formatResult(start, end, result, prevHours);
    start = currDay;
    prevHours = currHours;
  }

  formatResult(start, end, result, prevHours);
  return result;
};

const WEEK_DAYS = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

const formatResult = (start, end, result, prevHours) => {
  if (WEEK_DAYS.indexOf(start) > WEEK_DAYS.indexOf(end)) {
    result.push(`${start}: ${prevHours}`);
  } else {
    result.push(`${start} - ${end}: ${prevHours}`);
  }
};

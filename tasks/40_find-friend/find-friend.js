export function findFriend(line) {
  const redPersonsIndexes = getAllIndexes(line, 'red');

  return redPersonsIndexes.filter((index) => {
    return inBetweenTwoBluePersons(index)
        || nextTwoAreBluePersons(index)
        || previousTwoAreBluePersons(index);
  }).length;

  function inBetweenTwoBluePersons(index) {
    return notAtFirstAndLastPosition(index) && surroundingPeopleAreBlue(index);
  }
  function notAtFirstAndLastPosition(index) {
    return index !== 0 && index !== line.length - 1;
  }
  function surroundingPeopleAreBlue(index) {
    return line[index - 1] === 'blue' && line[index + 1] === 'blue';
  }

  function nextTwoAreBluePersons(index) {
    return notAtTwoLastPositions(index) && nextTwoAreBlue(index);
  }
  function notAtTwoLastPositions(index) {
    return index !== line.length - 1 && index !== line.length - 2;
  }
  function nextTwoAreBlue(index) {
    return line[index + 1] === 'blue' && line[index + 2] === 'blue';
  }

  function previousTwoAreBluePersons(index) {
    return notAtFirstTwoPositions(index) && previousTwoAreBlue(index);
  }
  function notAtFirstTwoPositions(index) {
    return index !== 0 && index !== 1;
  }
  function previousTwoAreBlue(index) {
    return line[index - 1] === 'blue' && line[index - 2] === 'blue';
  }

  function getAllIndexes(arr, val) {
    let indexes = [];
    let i = -1;

    while ((i = arr.indexOf(val, i+1)) != -1) {
      indexes.push(i);
    }

    return indexes;
  }
}

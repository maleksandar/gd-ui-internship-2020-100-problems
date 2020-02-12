export function findFriend(line) {
  let n = line.length;
  let numOfPossiblyFriends = 0;
  for (let i = 0; i < n; i++) {
    if (line[i] === 'red') {
      if (i != 0 || i != 1) {
        if (line[i-1] === 'blue' && line[i-2] === 'blue') {
          numOfPossiblyFriends++;
        } else if (i != 0 || i != n-1) {
          if (line[i-1] === 'blue' && line[i+1] === 'blue') {
            numOfPossiblyFriends++;
          } else if (i != n-1 || i != n-2) {
            if (line[i+1] === 'blue' && line[i+2] === 'blue') {
              numOfPossiblyFriends++;
            }
          }
        }
      }
    }
  }

  return numOfPossiblyFriends;
}

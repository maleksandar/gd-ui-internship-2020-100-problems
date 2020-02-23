export function findFriend(array) {

    let numberOfFriends = 0;

    for (let i = 0; i < array.length; i++) {

        if (array[i] === 'red') {
            if (array[i - 1] !== null && array[i - 2] != null && array[i - 1] === 'blue' && array[i - 2] === 'blue') {
                numberOfFriends++;
            }
            else if (array[i - 1] !== null && array[i + 1] != null && array[i - 1] === 'blue' && array[i + 1] === 'blue') {
                numberOfFriends++;
            }
            else if (array[i + 1] !== null && array[i + 2] != null && array[i + 1] === 'blue' && array[i + 2] === 'blue') {
                numberOfFriends++;
            }
        }
    }

    return numberOfFriends;
}
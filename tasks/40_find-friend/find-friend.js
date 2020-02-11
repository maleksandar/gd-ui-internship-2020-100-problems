

export function findFriend(arr) {


    if (arr.length < 3) return 0;

    let candidates = 0;
    
    var i = 0;

    while (i < arr.length -2) {

        let left = arr[i];
        let middle = arr[i+1];
        let right = arr[i+2];

        let red = 0;
        let blue = 0;
        if (left === 'blue') blue ++;
        else if (left === 'red') red ++;
        if (middle === 'blue') blue ++;
        else if (middle === 'red') red ++;
        if (right === 'blue') blue ++;
        else if (right === 'red') red ++;

        if (blue === 2 && red === 1) {
            candidates++;
            if (left === 'red') i += 1; 
            else if (middle === 'red') i+=2;
            else if (right === 'red') i+=3;      
        } else {
            i++;       
        }

    }
    return candidates;

}
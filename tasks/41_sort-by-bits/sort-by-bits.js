export function sortByBits(array) {
    array.sort((a, b) => {
        a = convertNumberToBits(a);
        b = convertNumberToBits(b);

        let aBits = numberOfOnes(a);
        let bBits = numberOfOnes(b);

        if (aBits < bBits) {
            return -1;
        }
        else if (aBits > bBits) {
            return 1;
        }

        return a - b;
    })

    return array;
}

function convertNumberToBits(number) {
    return Number(number).toString(2);
}

function numberOfOnes(number) {
    let countBits = number.match(/1/g);
    return countBits ? countBits.length : 0;
}




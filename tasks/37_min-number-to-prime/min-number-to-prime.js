
export function minNumberToPrime(arr) {

    let sum = arr.reduce((acc, number) => acc + number, 0);

    let number = 0;

    while (isPrime(sum + number) === false) {
        number++;
    }

    return number;

}

function isPrime(number) {

    for (let i = 2, s = Math.sqrt(number); i <= s; i++)
        if (number % i == 0) return false;
    return number > 1;

}
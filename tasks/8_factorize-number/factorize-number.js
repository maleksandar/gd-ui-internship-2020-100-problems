export function factorialize(broj) {
    let factorial = 1;

    if (broj === 0) {
        return factorial;
    }

    for (let i = broj; i > 0; i--) {
        factorial *= i;
    }

    return factorial;
}
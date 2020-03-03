export function uniqueInOrder(array) {

    let niz = Array.from(array);

    if (typeof niz === 'string') {
        niz = niz.split('');
    }

    if (niz.length === 0) {
        return [];
    }

    return niz.reduce((acc, curr) => {
        if (acc.slice(-1)[0] !== curr) {
            acc.push(curr);
        }

        return acc;
    }, [niz[0]]);
}
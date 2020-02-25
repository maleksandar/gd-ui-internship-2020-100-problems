export function whatIsInAName(collection, source) {
    let keys = Object.keys(source);

    return collection.filter((item) => {
        for (let k of keys) {
            if (item[k] !== source[k]) {
                return false;
            }
        }
        return true;
    });
}
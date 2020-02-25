export function abbreviated(string) {
    let words = string.split(' ');
    let abbreviatedString = '';

    abbreviatedString += words[0] + ' ';

    if (words.length === 1) {
        return abbreviatedString.trim();
    }

    for (let i = 1; i < words.length; i++) {
        if (words[i].match(/[A-Z]/)) {
            abbreviatedString += words[i].charAt(0) + '. ';
        }
    }

    return abbreviatedString.trim();

}
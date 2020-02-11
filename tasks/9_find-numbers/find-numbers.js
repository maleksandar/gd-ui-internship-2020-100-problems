

export function getNumbers(text) {

    var regex = /\d+/g;

    return  text.match(regex).map(elem => parseInt(elem));
   

}
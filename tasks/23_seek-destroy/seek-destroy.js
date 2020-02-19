

export function destroyer() {

    let array = arguments[0];


    for (let i = 1; i <= arguments.length - 1; i++) {
        array = array.filter((elem) => !(elem === arguments[i]));
    }
    
    return array;
}
export function factorialize(broj){
    var fact=1;
    if(broj===0){
        return fact;
    }

    while(broj>0){
        fact*=broj;
        broj--;
    };

    return fact;
}
export function peopleInBus(arr){
    let total = [];
    for(let i=0; i<arr.length; i++){
        arr[i].reduce((a,b) => {
            return total.push(a-b);
        });
    }
    return total.reduce((a,b) => {
        return a+b;
    })
}
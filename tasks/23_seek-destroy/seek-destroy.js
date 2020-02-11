export function destroyer(arr){
    return arr.filter(val => {
        for(let i=1; i<arguments.length ;i++){
            if(val === arguments[i])return false;
        }
        return true;
    })
}
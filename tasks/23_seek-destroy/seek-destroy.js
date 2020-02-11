export function destroyer(){

    return arguments[0].filter(val => {
        for(let i=1; i< arguments.length;i++){
            if(val === arguments[i])return false;
        }
        return true;
    })
}
export function removeFalsyValues(arr){
    return arr.filter(el => {
        if(el)return true;
        return false;
    });
}
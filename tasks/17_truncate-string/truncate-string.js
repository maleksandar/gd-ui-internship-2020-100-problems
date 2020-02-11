export function truncateString(str, strLength){
    if(str.length<=strLength) return str;
    else if(strLength<=3) return str.slice(0,strLength) + '...';
    else return str.slice(0,strLength-3) + '...';
    
}
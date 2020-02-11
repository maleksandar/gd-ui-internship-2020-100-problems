export function humanizeFormat(broj){
    if(arguments.length===0) return "";
    switch(broj % 10) {
        case 1: return broj + "st";
        case 2: return broj + "nd";
        case 3: return broj + "rd";       
    }
        
    return broj + "th";
}
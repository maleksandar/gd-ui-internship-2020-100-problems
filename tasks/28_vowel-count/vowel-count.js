

export function getVowelCount(str) {

 return  str.toLowerCase().split("").reduce( (acc, val) => {
    if ( 
     val === 'a' || val === 'e' || val === 'i' || val === 'o' || val === 'u'
    ) return acc + 1; else return acc;
}   ,0);
return b;
}


export function titleCase(sentence) {

var array = sentence.split(" ");
var i;
for (i=0; i<array.length; i++) {
    array[i] = array[i].toLowerCase();
    array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
}

return array.join(" ");


}
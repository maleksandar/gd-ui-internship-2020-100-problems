
export function reverseString(text) {

var array = text.split("");

var i;
for (i=0; i<array.length/2; i++) {
var t = array[i];
array[i] = array[array.length - i - 1];
array[array.length - i - 1] = t;
}

return array.join("");

}
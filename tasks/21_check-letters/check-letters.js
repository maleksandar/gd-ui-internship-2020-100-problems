

export function checkLetters(array) {
var first = array[0].toLowerCase();

var second = array[1].toLowerCase();


var i;
for (i =0; i<second.length; i++) {

var index = first.indexOf(second.charAt(i));
if (index == -1) return false;

}
return true;

}



export function repeatStringNumTimes(str, num) {

if (num <= 0) return "";

var ret = "";
var i;
for (i=0; i<num; i++) {
    ret+=str;
}
return ret;

}
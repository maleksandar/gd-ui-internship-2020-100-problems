export function rot13Encoder(str){
    str.toUpperCase();
    let alfabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!?.,".split("");
    let rot13 = "NOPQRSTUVWXYZABCDEFGHIJKLM!?.,".split("");
    let result = "";
	for (let i=0; i<str.length; i++) {
		for (let j=0; j<alfabet.length; j++) {
			if (str[i]===alfabet[j]) {
				result+=rot13[j];
			}
		}
		if(str[i]===" ") {
			result+=" ";
		}
	}
	return result;
}
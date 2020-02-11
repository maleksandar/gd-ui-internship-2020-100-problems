export function removeFalsyValues(arr){
    var niz = arr.filter(clan => (clan!=false && clan!=undefined && clan!=0 && clan!=null && clan!="" && !Number.isNaN(clan)));
    return niz;
}
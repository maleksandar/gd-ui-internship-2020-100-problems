export const stringExpansion = str => {
  let num = -1;
  let newAr = [];

  var stringArr = str.split(""); // 3alex => 3 a l e x

  newAr = stringArr.map(el => {
    if (isNaN(el)) {
      switch (num) {
        case -1:
          return el;
          break;
        case 0:
          return "";
          break;
        default:
          return el.repeat(num);
      }
    } else {
      num = el;
    }
  });
  return newAr.join("");
};

// console.log(stringExpansion("3d332f2a"));
// console.log(stringExpansion("3alex"));

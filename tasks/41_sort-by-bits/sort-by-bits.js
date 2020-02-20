

let cache = [];
let fillCacheFlag = false;

export function sortByBits(array) {
  if (!fillCacheFlag) {
    fillCache();
    fillCacheFlag = true;
  }


  return array.sort((a, b) => {
    let bitsA = countBits(a);
    let bitsB = countBits(b);
    if (bitsA > bitsB) return 1;
    else if (bitsA === bitsB) {
      if (a>b) return 1;
      else return -1;
    } else return -1;
  });
}


function countBits(number) {
  let count = 0;

  for (let i=0; i<4; i++) {
    let chunk = ((255 << i*8) & number) >>> i*8;
    count+= cache[chunk];
  }

  return count;
}

function fillCache() {
  for (let i=0; i<256; i++) {
    let number = i;
    let count = 0;
    for (let j=0; j<32; j++) {
      if (number & 1 === 1) count++;
      number = number >>> 1;
    }
    cache[i] = count;
  }
}

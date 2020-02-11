export const destroyer = (arr, ...elements) => {
  var i = 0;
  while (i <= arr.length) {
    //for each element into array
    for (let j = 0; j < elements.length; j++) {
      //foreach "elements"
      if (arr[i] == elements[j]) {
        // Compare element arr==element
        arr.splice(i, 1); //If are equal delete from arr
        i--; //Check again the same position
        j = 0;
        break; //Stop for loop
      }
    }
    i++;
  }
  return arr;
};

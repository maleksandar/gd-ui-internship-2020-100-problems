export const DNAStrand = str => {
  var pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };
  var arr = str.split("");
  return arr.map(x => pairs[x]).join("");
};

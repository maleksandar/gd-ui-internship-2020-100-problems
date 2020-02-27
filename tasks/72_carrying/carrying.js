export function addTogether(x) {
  if (arguments.length === 1 && typeof arguments[0] === "number") {
    return function(y) {
      if (typeof arguments[0] === "number") return x + y;
    };
  } else {
    if (typeof arguments[0] !== "number" || typeof arguments[1] !== "number") {
      return undefined;
    }
    return arguments[0] + arguments[1];
  }
}

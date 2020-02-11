export const GOLF_SCORES = {
  HOLE_IN_ONE: "Hole-in-One",
  EAGLE: "Eagle",
  BIRDIE: "Birdie",
  PAR: "Par",
  BOGEY: "Bogey",
  DOUBLE_BOGEY: "Double Bogey",
  GO_HOME: "Go Home"
};

export const golfScore = (par, strokes) => {
  return strokes == 1
    ? GOLF_SCORES.HOLE_IN_ONE
    : strokes <= par - 2
    ? GOLF_SCORES.EAGLE
    : strokes == par - 1
    ? GOLF_SCORES.BIRDIE
    : strokes == par
    ? GOLF_SCORES.PAR
    : strokes == par + 1
    ? GOLF_SCORES.BOGEY
    : strokes == par + 2
    ? GOLF_SCORES.DOUBLE_BOGEY
    : strokes >= par + 3
    ? GOLF_SCORES.GO_HOME
    : GOLF_SCORES.GO_HOME;
};

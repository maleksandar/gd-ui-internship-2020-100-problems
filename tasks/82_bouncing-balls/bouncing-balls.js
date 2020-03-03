/**
 * @param {number} h
 * @param {number} bounce
 * @param {number} window
 * @return {number}
 * @description "A child plays with a ball on the nth floor of a big building.
 * The height of this floor is parameter height. He lets out the ball.
 * The ball bounces for a bouncy parameter of its height. His mother looks out
 * of a window that is on the height window parameter from the ground.
 * The function calculates how much time the mother will see the ball."
 */

export function bouncingBall(height, bounce, window) {
  if (height <= 0 || bounce <= 0 || bounce >= 1 || window > height) {
    return -1;
  }

  let numOfViews = 1;
  height = height * bounce;

  while (height > window) {
    numOfViews += 2;
    height = height * bounce;
  }

  return numOfViews;
}

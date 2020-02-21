export class SimTime {
  constructor() {
    this.currentTime = 0;
    this.speed = 1;
    this.realTime = 0;
  }

  get() {
    return this.currentTime;
  }

  setSpeed(newSpeed) {
    this.speed = newSpeed;
  }

  update(time) {
    this.currentTime += (time - this.realTime) * this.speed;
    this.realTime = time;
  }
}

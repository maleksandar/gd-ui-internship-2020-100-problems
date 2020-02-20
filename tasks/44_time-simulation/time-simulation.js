export class SimTime {
  constructor() {
    this.time = 0;
    this.speed = 1;
    this.realTime = 0;
  }

  get() {
    return this.time;
  }
  setSpeed(speed) {
    this.speed = speed;
  }
  update(realTime) {
    this.time = this.time + (realTime - this.realTime) * this.speed;
    this.realTime = realTime;
  }
}

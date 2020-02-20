export class SimTime {
  constructor() {
    this.oldTime = 0;
    this.newTime = 0;
    this.simSpeed = 1;
  }

  get() {
    return this.oldTime;
  }

  update(time) {
    this.oldTime = this.oldTime + (time - this.newTime) * this.simSpeed; //21
    this.newTime = time; //15
  }

  setSpeed(speed) {
    this.simSpeed = speed;
  }
}

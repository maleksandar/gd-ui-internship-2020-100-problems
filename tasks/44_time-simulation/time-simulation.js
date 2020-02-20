

export class SimTime {
  constructor() {
    this.currentTime = 0;
    this.currentSpeed = 1;
    this.lastRealTime = 0;
  }

  get() {
    return this.currentTime;
  }

  update(time) {
    this.currentTime += (time - this.lastRealTime)*this.currentSpeed;
    this.lastRealTime = time;
  }

  setSpeed(speed) {
    this.currentSpeed = speed;
  }
}

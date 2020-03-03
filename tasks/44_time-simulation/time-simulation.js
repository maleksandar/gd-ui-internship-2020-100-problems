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
    const delta = time - this.realTime;
    const deltaAccelerated = delta * this.speed;
    this.currentTime += deltaAccelerated;
    this.realTime = time;
  }
}

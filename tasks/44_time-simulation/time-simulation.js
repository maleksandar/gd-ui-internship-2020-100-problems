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
    const delta = realTime - this.realTime;
    const deltaAccelerated = delta * this.speed;

    this.time += deltaAccelerated;
    this.realTime = realTime;
  }
}

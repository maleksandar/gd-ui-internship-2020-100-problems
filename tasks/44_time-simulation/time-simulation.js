export class SimTime {
  constructor() {
    this._oldTime = 0;
    this._newTime = 0;
    this._speed = 1;
  }

  get() {
    return this._oldTime;
  }

  update(time) {
    this._oldTime += (time - this._newTime) * this._speed;
    this._newTime = time;
  }

  setSpeed(speed) {
    this._speed = speed;
  }
}

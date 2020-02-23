export function SimTime() {
    this.currentTime = 0;
    this.speed = 1;
    this.realTime = 0;

    this.get = function () {
        return this.currentTime;
    }

    this.setSpeed = function (newSpeed) {
        this.speed = newSpeed;
    }

    this.update = function (time) {
        this.currentTime += (time - this.realTime) * this.speed;
        this.realTime = time;
    }

}
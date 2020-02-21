export function Human(name, sex) {
  this.name = name;
  this.sex = sex;
}

export function Man(name) {
  Human.call(this, name, 'male');
}

Man.prototype = Object.create(Human.prototype);
Man.prototype.constructor = Man;

export function Woman(name) {
  Human.call(this, name, 'female');
}

Woman.prototype = Object.create(Human.prototype);
Woman.prototype.constructor = Woman;

export class God {
  static create() {
    return [new Man('Adam'), new Woman('Eve')];
  }
}


export const God = {
  create() {
    return [new Man('Adam'), new Woman('Eve')];
  },
};

export function Human(name, sex) {
  this.name = name;
  this.sex = sex;
}

export function Man(name) {
  Human.call(this, name, 'male');
}

export function Woman(name) {
  Human.call(this, name, 'female');
}

Man.prototype = Object.create(Human.prototype);
Woman.prototype = Object.create(Human.prototype);

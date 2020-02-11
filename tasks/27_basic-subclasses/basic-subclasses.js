export class Human {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
}
export class Woman extends Human {
  constructor(name, sex) {
    super(name, sex);
  }
}
export class Man extends Human {
  constructor(name, sex) {
    super(name, sex);
  }
}
export const God = {
  create: function() {
    return [new Man('Adam', 'male'), new Woman('Eve', 'female')];
  },
};

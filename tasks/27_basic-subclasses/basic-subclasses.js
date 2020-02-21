export class Human {
  constructor(name) {
    this.name = name;
  }
}
export class Woman extends Human {
  constructor(name, sex) {
    super(name, sex);
    this.sex = 'female';
  }
}
export class Man extends Human {
  constructor(name, sex) {
    super(name, sex);
    this.sex = 'male';
  }
}
export const God = {
  create: function() {
    return [new Man('Adam'), new Woman('Eve', 'female')];
  },
};

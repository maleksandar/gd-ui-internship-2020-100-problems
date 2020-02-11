export class God {
  constructor() {

  }

  static create() {
    return [new Man('Adam'), new Woman('Eve')];
  }
}

export class Human {
  constructor(name) {
    this.name = name;
  }

  // TODO: Second way?
  // constructor(name, sex) {
  //   this.name = name;
  //   this.sex = sex;
  // }
}

export class Man extends Human {
  constructor(name) {
    super(name);
    this.sex = 'male';
  }

  // TODO: Second way?
  // constructor(name) {
  //   super(name, 'male');
  // }
}

export class Woman extends Human {
  constructor(name) {
    super(name);
    this.sex = 'female';
  }

  // TODO: Second way?
  // constructor(name) {
  //   super(name, 'female');
  // }
}

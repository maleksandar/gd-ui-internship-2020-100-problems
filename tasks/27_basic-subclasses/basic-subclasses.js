export class God {
  static create() {
    const Adam = new Man();
    const Eve = new Woman();
    return [Adam, Eve];
  }
}

export class Human {
  constructor() {}
}

export class Man extends Human {
  constructor() {
    super();
    this.name = "Adam";
    this.sex = "male";
  }
}

export class Woman extends Human {
  constructor() {
    super();
    this.sex = "female";
    this.name = "Eve";
  }
}

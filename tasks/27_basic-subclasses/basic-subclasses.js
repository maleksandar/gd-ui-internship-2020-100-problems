export class God {
  static create() {
    const Adam = new Man("Adam", "male");
    const Eve = new Woman("Eve", "woman");
    return [Adam, Eve];
  }
}

export class Human {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}

export class Man extends Human {
  constructor() {
    super();
  }
}

export class Woman extends Human {
  constructor() {
    super();
  }
}

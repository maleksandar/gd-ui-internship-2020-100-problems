export class Human {
    constructor(sex, name){
        this.sex=sex;
        this.name=name;
    }
}

export class Man extends Human{
    constructor(sex, name){
        super(sex, name);
    }
}

export class Woman extends Human{
    constructor(sex, name){
        super(sex,name);
    }
}

export const God = { 
    create : () => [new Man('male', 'Adam'), new Woman('female', 'Eve')]
}




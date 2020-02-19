

export class Human {

    constructor(sex, name) {
        this.sex = sex;
        this.name = name;
    }

}

export class Man extends Human {

    constructor(name) {
        super('male', name);
    }

}

export class Woman extends Human {
    constructor(name) {
        super('female', name);
    }
}

export class God {


    static create() {

        let ret = [];
        let adam = new Man('Adam');
        let eve = new Woman('Eve');


        ret.push(adam);
        ret.push(eve);

        return ret;

    }


}
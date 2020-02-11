

export class Human {

    constructor(sex, name) {
        this.sex = sex;
        this.name = name;
    }

}

export class Man extends Human {
   
    constructor(sex, name) {
        super(sex, name);
    }

}

export class Woman extends Human {
    constructor(sex, name) {
        super(sex, name);
    }
}

export class God {

   
    static create() {

        let ret = [];
        let adam = new Man('male', 'Adam');
        let eve = new Woman('female', 'Eve');


        ret.push(adam);
        ret.push(eve);
    
        return ret;

    }


}
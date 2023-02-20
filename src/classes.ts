class Department {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    describe(this: Department){
        console.log('department name : ' + this.name);
    }
}

const accounting = new Department('Accounting');
accounting.describe();
console.log(accounting);

const accountingCopy = { name: "AccountingCopy", describe: accounting.describe };
accountingCopy.describe();
console.log(accountingCopy);

class NewDepartment{
    constructor(private readonly id: number, private name: string) {
    }
}

const newDep = new NewDepartment(1, 'New Accounting');
console.log(newDep);

class Person {
    constructor(private name: string, private sex: string){}
}
class Men extends Person {
    constructor(name: string, private phone: string){
        super(name, 'Male');
    }

    get phoneNumber() {
        return this.phone;
    }

    set phoneNumber(phone: string) {
        this.phone = phone;
    }
}
const men = new Men('Max', '5343');

abstract class Company {
    abstract earnMoney(): void;
}

class SingletonClass{
    private static instance: SingletonClass;

    static getInstance() {
        if (SingletonClass.instance){
            return this.instance;
        }
        return new SingletonClass('singleton');
    } 

    private constructor(private name: string){};
}

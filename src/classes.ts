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
    constructor(name: string){
        super(name, 'Male');
    }
}

const men = new Men('Max');

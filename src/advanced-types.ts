type Admin = {
    name: string;
    privilages: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const exampleEmplyee: ElevatedEmployee = {
    name: 'Tom',
    privilages: ['create-server'],
    startDate: new Date()
}

// another way
// interface Admin  {
//     name: string;
//     privilages: string[];
// }

// interface Employee  {
//     name: string;
//     startDate: Date;
// }

// interface ElevatedEmployee extends Admin, Employee {}

type type1 = string | number;
type type2 = number | boolean;
type type3 = type1 & type2;

interface Bird {
    type: 'bird',
    flyingSpeed: number
}

interface Horse {
    type: 'horse',
    runningSpped: number
}

type AnimalType = Bird | Horse;

function moveAnimal(animal: AnimalType) {
    let speed;
    switch(animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpped;
            break;    
    }
}


interface ErrorContainer {
    [prop: string]: string;
}

const errorEmail: ErrorContainer = {
    message: 'email is incorrect'
}

type both = string | number;

function addBoth(a: string, b: string): string
function addBoth(a: both, b: both) {
    if (typeof a === 'string' || typeof b === 'string'){
        return a.toString() + b.toString();
    }
    return a+b;
}
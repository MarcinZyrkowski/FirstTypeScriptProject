const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
} = {
    name: 'Marcin',
    age: 26,
    hobbies: ['Chess','Sport'],
    role: [1,'Author']
}

console.log(person);


enum Role {ADMIN, READ_ONLY, AUTHOR}

const newPerson = {
    name: 'Marcin',
    age: 26,
    hobbies: ['Chess','Sport'],
    role: Role.ADMIN
}
console.log(newPerson);

let arrayWIthAnyType: any[];
arrayWIthAnyType = ['text', 1, true]
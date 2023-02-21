interface Pen {
    length: number;
    color: string;

    isForKids(): boolean;
}

let penOne: Pen;

penOne = { 
    length: 800,
    color: 'blue',
    isForKids() {return false; }
}

interface Runnable {
    name: string;
    run(): boolean;
}

class Animal implements Runnable {
    name = 'someName';
    run() { return true }

    moreFields = 'yes';
}

interface AddInterface {
    (a: number, b: number): number;
}
let addItf: AddInterface;

interface Named {
    name?: string;
}
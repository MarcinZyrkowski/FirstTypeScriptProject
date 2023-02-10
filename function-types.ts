function add(number1: number, number2: number) {
    return number1 + number2;
}

function printHelloWord() {
    console.log('Hello Word');
}

let myOwnVariable: (a: number, b: number) => number;
myOwnVariable = add;
console.log(myOwnVariable(2,5));

function addAndHandle(number1: number, number2: number, cb: (num: number) => void) {
    const result = number1 + number2;
    cb(result);
}

addAndHandle(55,10, (result) => {
    console.log('My result is: ' + result);
})
function addNumbers(number_1: number, number_2: number) {
    return number_1 + number_2;
}

const x = 5;
const y = 4.3;

console.log(addNumbers(x,y));

const myButton = document.querySelector('button')!;
myButton.addEventListener('click', () => {
    console.log('Hi all');
});
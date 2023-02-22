type Combinable = number | string;

function combine(
    imput1: Combinable, 
    imput2: Combinable 
) {
    let result;
    if (typeof imput1 === 'number' && typeof imput2 === 'number') {
        result = imput1 + imput2;
    } else {
        result = imput1.toString() + imput2.toString();
    }
    return result;
}

const combinedAges = combine(12,23);
console.log(combinedAges);

const combinedNames = combine('Max', 'Anna');
console.log(combinedNames);

type SpecificUser = { name: string; age: number; };
let u1: SpecificUser = {name: 'Max', age: 28};
console.log(u1);
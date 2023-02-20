const addWithDefaultParameter = (a: number, b: number = 1) => a + b;
console.log(addWithDefaultParameter(9));

const hobblies = ['Sports', 'Cooking'];
const activeHobbies = ['Chess'];
activeHobbies.push(...hobblies);

const personE = {
    firstName: 'Max',
    age: 12
}
const copyPersonE = { ...personE }

const addWithRest = (...numbers: number[] ) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
}
const sum = addWithRest(5,2,7,2,5.7);
console.log(sum);

const [ hobby1, hobby2, ...restHobbies] = hobblies;
const { firstName, age } = personE;
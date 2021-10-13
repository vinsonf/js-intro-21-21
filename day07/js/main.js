const number = 1;
const string = '1';
const boolean = true // 1

const object = {
    number: 1,
    'string-1': '1',
    true: true,
}
 
object.number;
object["string-1"];
object.true;

const array = [1, '1', true, number, myFunction(2, null)];
array[1];
array[2];
console.log(array)

myFunction(1 + 2, 5);
function myFunction(number1, number2) {
    const number = 1;
    console.log(number1, number2, number);
    return number1;
}
const value = myFunction(3, 5);

console.log(value);

const myFunctions = function() {
    const number = 1;
}

const myFunct = () => {
    const number = 1;
}
myFunctions();
console.log(myFunct())
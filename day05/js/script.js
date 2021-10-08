// data types and variable types
let boolean = true || false; new Boolean('');
const string = "" || '1' || ``; String(5);
var number = 0 || 0.2 || -5.001; Number('5');

// complex / compound 
const array = []; Array;
let object = {}; Object;


const array2 = [ 'a', 'b', 'c', {obj: {arr: []}}, [[]]]
//               0,  1,  2
const object2 = {
    name: 'a',
    1: 'b',
    2: 'c'
}

let a = 5;
// // operators 
console.log('compute')
console.log(a + 1);
console.log(a - 2);
console.log(a * 3);
console.log(a / 4);

// console.log(a);
console.log('assignment')

console.log(a += 1);
console.log(a -= 2);
console.log(a *= 3);
console.log(a /= 4);


console.log(a + 1);
console.log(a - 2);
console.log(a * 3);
console.log(a / 4);


console.log(a += 1);
console.log(a -= 2);
console.log(a *= 3);
console.log(a /= 4);


console.log(a);


// string methods

''.length

'vinson c fernandez'.split(' ')
'abc'.sup();


const random = Math.random() * 20;
Math.PI


console.log(Math.ceil(random));



setInterval(function() {
    const date = new Date();
    date.setMonth(date.getMonth() + 20)
    document.body.innerHTML = (date);
}, 1000)


// const value1 = alert('hello'); // undefined
// const value2 = confirm('what do you think'); // boolean / false / true 
// const value3 = prompt('what is your favorite food'); // null / "string"

// if, if else, if - else if , switch, ternary
let b = 3;
let c = 2;
//   ( truthy )
if (1 + a === 5) {
    console.log('run code block')
}

//   ( condition )
if (1 + a === 5) {
    console.log('run code block')
} else {
    console.log('run code block if condition is falsey')
}

//   ( condition )
if (1 + a === 5) {
    console.log('run code block')
} else if (2 + b === 5) {
    console.log('run code block if 2nd condition is truthy')
} else if (3 + c === 5) {
    console.log('run code block if 3nd condition is truthy')
}


//   ( condition )
if (1 + a === 5) {
    console.log('run code block')
} else if (2 + a === 5) {
    console.log('run code block if 2nd condition is truthy')
} else if (3 + a === 5) {
    console.log('run code block if 3nd condition is truthy')
} else {
    console.log('run code block if no other condition is truthy')
}

switch(a) {
    case 4:
        console.log('a is 4');
    case 3:
        console.log('a is 4');
        break;
    default:
        console.log('none were true');
}
// 4
1 + a === 5 ?
[1][0] == '1' ? console.log('nested') : console.log('negetive nested') :
[5][0] == '1' ? console.log('nested') : console.log('negetive nested');

1 + 2 === 3 || 4 - 5 === 7 ? console.log(true) : console.log(false);
1 + 2 === 0 && 4 - 5 === 7 || true ? console.log(true) : console.log(false);
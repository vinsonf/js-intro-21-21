// setInterval(function() {
//     const date = new Date();

//     const second = date.getSeconds();
    
    
    
//     if ( second < 15) {
//         document.body.style.backgroundColor = 'yellow';
//         document.body.style.color = 'black';
//     } else if (second < 30) {
//         document.body.style.backgroundColor = 'red';
//     } else if (second < 45) {
//         document.body.style.backgroundColor = 'green';
//     } else {
//         document.body.style.backgroundColor = 'black';
//         document.body.style.color = 'white';
//     }
    
    
//     document.body.innerHTML = second;
// }, 1000)


const user1 = {
    name: 'vinson'
}
const user3 = {
    name: 'joe'
}

let user2 = user1;
user2 = user3;

let string1 = 'joe';
let string2 = string1;

string2 = 'vinson';


console.log(user1, user2, user3);


// ternary
condition = 'test' === 'test';
condition ? trueOption() : falseOption();

function trueOption() {
    console.log('this is true');
    console.log('and i can do more than one thing')
}

function falseOption() {
    console.log('this is false');
    console.log('and i can do more than one thing')
}


const appName = "My Cool Apps";

const no = false;

// primitive data types
const boolean = true;
const number = 1.27;
const string = 'abc';

// organize our data types
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const object = {
    name: 'Vinson',
    isInstructor: true,
    score: 100,
}

const h1 = document.querySelector('h1');

console.log(h1);


h1.addEventListener('mouseenter', function() {
    h1.style.color = 'red';
    h1.style.backgroundColor = 'blue';
    h1.innerText = object.name;
});
h1.addEventListener('mouseleave', function() {
    h1.style.color = 'green';
    h1.style.backgroundColor = 'yellow';
    h1.innerText = "Brittney"
});

function log() {
    console.log(...arguments)
}
let color = localStorage.getItem('color');
let myNumber = Number(localStorage.getItem('myNumber'));
console.log('color', color);
console.log('myNumber', myNumber, typeof myNumber)




const myForm = document.forms[0];
const myForm2 = document.forms['myForm2'];
const myInput2 = myForm2[0];
const myInput = myForm[0];
const button = document.querySelector('button');


if (color) {
    myInput2.value = color;
    document.body.style.backgroundColor = color;
}



if (myNumber || myNumber === 0) {
    myInput.value = myNumber;
}

button.disabled = true;

myInput.addEventListener('input', function() {
    console.log(this.value);
    localStorage.setItem('myNumber', this.value);
});

myInput2.addEventListener('input', function() {
    if (this.value.length > 9) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
    document.body.style.backgroundColor = myInput2.value;
    localStorage.setItem('color', myInput2.value);
});

button.addEventListener('click', function() {
    localStorage.clear();

})
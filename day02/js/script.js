const appName = 'My Cool App'; // constant string
let score = 0; // lettable number

score = score + 10; // can change
console.log(score);
score = score + 10; // as many times as we need
console.log(score);
var isOld = true; // variable boolean *dont use a var
var isOld = true; // variable boolean *dont use a var
// groups
const group1 = {
    color: "red",
    padding: '20px',
}
const group2 = {
    color: "green",
    padding: '25px',
}
const groups = [group1, group2];
console.log(groups);
let test;
test = 1;
test = null;
console.log(test);
// HTML Work

// create an input in memory.
const input = document.createElement('input'); 
// nest the input in the body tag
document.body.append(input);
// change the type of input we see
input.type = 'color';
// add a listener for changes to the input
input.addEventListener('input', function() {
    // update the background color
    document.body.style.backgroundColor = input.value;
});
// create an input element in a variable name colorInput
const colorInput = document.createElement('input');
// nest colorInput inside body tag
document.body.append(colorInput);

colorInput.type = 'color';
colorInput.addEventListener('change', function() {
    document.querySelector('h1').style.color = colorInput.value;
});
const textInput = document.createElement('input');
document.body.append(textInput);
textInput.addEventListener('input', function() {
    document.querySelector('h1').innerText = textInput.value;
})

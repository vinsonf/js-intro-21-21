// Things we can do with the DOM (Document Object Model);

// create h1
const h1 = document.createElement('h1');
// place elements where ever we want.
document.body.appendChild(h1);



const p = document.createElement('p');
h1.appendChild(p);
document.body.appendChild(p);

// change text in the model;
h1.innerHTML = 'Title'; 
p.innerHTML = 'I am a little p tag'
// remove
p.remove();
h1.appendChild(p);


h1.style.color = 'red';
p.classList.add('active');
p.classList.remove('active');

const myOtherH1 = document.createElement('h1');
document.body.appendChild(myOtherH1);
myOtherH1.innerHTML = 'other'
// get elements
const myH1 = document.querySelector('h1');
const myH1s = document.querySelectorAll('h1');


myH1.style.color = 'purple';

myH1s[0].style.color = 'blue';

console.log(myH1s)

myH1s.forEach(function(item) {
    console.log(item);
})


myH1.addEventListener('click',function() {
    console.log(this);
    this.style.color = 'red';
});

const todos = document.createElement('ul');
document.body.appendChild(todos);
todos.innerHTML = 'hi'; 
todos.addEventListener('click',function() {
    console.log(this, todos)
    
    const li = document.createElement('li');
    li.draggable = true;
    this.append(li);
    li.innerHTML = new Date();
});

const done = document.createElement('ul');

const doneLi = document.createElement('li');

done.append(doneLi);
doneLi.innerHTML = 'done'

document.body.appendChild(done);

let target = null;
document.addEventListener('dragend',function(event) {
    console.log(event);
    if (target) {
        target.appendChild(event.target);
    }
} );

done.addEventListener('dragenter', function(event) {
    console.log(event);
    target = this;
})
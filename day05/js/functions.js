// *named
// set of instructions to preform a specific task(s)

function myFunctionsName() {
    console.log('this will console when this function is called')
}

myFunctionsName();


doubleANumber(7); // argument

function multiply(num1, num2) {
    console.log(num1 * num2);
}

multiply(2_000, 3_000)

function createHeader(text, links) {
    const header = document.createElement('div');
    document.body.appendChild(header);

    const h1 = document.createElement('h1');
    header.appendChild(h1);
    h1.innerText  = text;
    displayLinks(header, links);
}

function displayLinks(header, links) {
    links.forEach(function(link) {
        const a = document.createElement('a');
        header.appendChild(a);
        a.innerText = link.text;
        a.href = link.href;
        a.style.margin = '10px'
    })
}

createHeader('Title Section', [{text: 'google', href: 'http://google.com'}, {text: 'yahoo', href: 'http://yahoo.com'}, {text: 'github', href: 'http://github.com'}]);

createHeader('Another Section', [])

createHeader('Another Section', [{text: 'google', href: 'http://google.com'}, {text: 'yahoo', href: 'http://yahoo.com'}, {text: 'github', href: 'http://github.com'}]);

function doubleANumber(num) { // parameter
    console.log(num * 2);
    return num * 2;
}
const myDoubledNumber = doubleANumber(20);



console.log(myDoubledNumber);

// const myObject = {
//     num1: 5,
//     num2: 2,
//     addNums: function() {
//         console.log(this.num1 + this.num2);
//         return this.num1 + this.num2;
//     }
// }

// const myObject2 = {
//     num1: 7,
//     num2: 2,
//     addNums: function() {
//         console.log(this.num1 + this.num2);
//         return this.num1 + this.num2;
//     }
// }

// myObject.addNums();
// myObject2.addNums();
// console.log(this)
const myScope = 'global';

const enemy1 = {
    health: 10,
    element: document.createElement('div'),

    place() {
   

        console.log(myScope)
        document.body.append(this.element);
        this.element.innerHTML = this.health;
        this.element.style.border = '10px solid black';
        this.element.style.color = 'red';
        this.element.addEventListener('click', function() {
        

            console.log(myScope)
            // this.health -= 1;
            // this.element.innerHTML = this.health;
        })
    }

}

const enemy2 = {
    health: 15,
    element: document.createElement('div'),

    place() {
        document.body.append(this.element);
        this.element.innerHTML = this.health;
        this.element.style.border = '10px solid black';
        this.element.style.color = 'green';
        this.element.addEventListener('click', () => {
            
            this.health -= 1;
            this.element.innerHTML = this.health;
        })
    }
}

enemy1.place();
enemy2.place();
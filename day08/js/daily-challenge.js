/*
Congrats, you got a new dog!
Create an object named "dog"
Name and describe your dog
Add a property to your dog object called "name" and assign a name
Add two more properties to describe your dog. (ex: How many legs, fur color, etc)
Let's teach it some tricks
Give your dog a property called “speak” and assign a function that will alert “woof!”
Add another method to teach your dog one more trick
BONUS: Display your dog object values in HTML
*/


const dog = {
    name: 'rover',
    color: 'red',
    legs: 4,
    age: 1,
    breed: 'shepard',
    speak() {
        alert('woof!')
    },
    sit() {
        console.log(`${this.name} sits.`);
    },
    display() {
        document.body.innerHTML = `<pre>${JSON.stringify(this)}`;
    }
}

class Dog {
    sound = 'woof!';
    constructor(name, color, legs, age, breed) {
        this.name = name;
        this.color = color;
        this.legs = legs; 
        this.age = age;
        this.breed = breed;
    }
    speak() {
        alert(this.sound);
    }
    sit() {
        console.log(`${this.name} sits.`);
    }
    display() {
        document.body.innerHTML +=  `<pre>${JSON.stringify(this)} </pre>`
    }
}
const dog2 = new Dog('rover', 'red', 4, 1, 'shepard');
const dog3 = new Dog('spot', 'white and black', 4, 10, 'dalmation');



console.log(dog );

class BigDog extends Dog {
    sound = 'Bark';
    sit() {
        console.log('i dont want to')
    }
}

class SmallDog extends Dog {
    sound = 'yelp';
}

const bigDog = new BigDog('rover', 'red', 4, 1, 'shepard');
const smallDog = new SmallDog('spot',10);
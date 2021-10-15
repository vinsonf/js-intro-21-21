const array = [];
const arrayOfObjects = [{id: 1, score: 0}, {id: 2, score: 200}, {id:3, score: 100}, {id: 2, score: 400},]

array.push([], 1, true, 0, null, 'a', 'one', '', false, {}, {name: 'test'}, 27);
console.log(array)
array.pop();
console.log(array)
array.unshift('start here');
console.log(array)
array.shift();
console.log(array);
// array.splice(2, 0, 'test', true);
console.log(array);
array.slice(-5);
const newArray = array.indexOf('one');

console.log(arrayOfObjects.every((item) => item.score > 100));
console.log(arrayOfObjects.some((item) => item.score > 100));
console.log( arrayOfObjects.find((item) => item.id === 2));


const user1 = {
    username: 'test1',
    score: 100,
    isPresent: true,
    age: 21,
    increment() {
        this.score += 100;
        console.log(this.score)
    }
}

const user2 = {
    username: 'test2',
    score: 100,
    isPresent: true,
    age: 22,
    increment() {
        this.score += 100;
        console.log(this.score)
    }
}
const user3 = {
    username: 'test3',
    score: 100,
    age: 22,
    get length() {
        return this.score + this.age;
    },
    increment() {
        this.score+= 100;
        console.log(user1.score)
    }
}
const enemy = {
    username: 'test3',
    score: 100,
    age: 22,
    get length() {
        return this.score + this.age;
    },
    increment() {
        this.score+= 100;
        console.log(user1.score)
    }
}


console.log(user1);
user1.increment();
user1.increment();
user1.increment();
user3.increment();
user3.increment();

console.log(user1, user2,enemy, user3, user3.length);

const h1 = document.createElement('h1')

console.dir(h1);
document.body.append(h1);

console.log(document.querySelectorAll('h1'));

class User {
    username = 'test1';
    score = 100;
    isPresent = true;
    age = 21;
    get length() {
        return this.age + this.score;
    }
    increment() {
        this.score += 10;
        console.log(this.score)
    }

    constructor(name, age) {
        this.username = name;
        this.age = age;
        this.element = document.createElement('h1');
        this.element.innerHTML = name;
        document.body.appendChild(this.element);

        this.element.addEventListener('click', () => this.updateScore())
    }

    updateScore() {
        this.increment();
        this.element.innerHTML = this.score;
    }
}

function time3(number) {
    return number * 3;
}

function createUser() {
    const user = {};
    user.score = 0;
    return user;
}

const users = [
    new User('a', 50),
    new User('b', 20),
    new User('c', 72),
    new User('d', 12),
    new User('e', 30),
];

users[0].increment();
users[4].increment();

console.log(users[0] instanceof User);

console.log(users[4].length)
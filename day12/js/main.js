fetch('https://api.github.com/users/vinsonf').then(res => res.json()).then(data => { console.log(data) });

class User {
    #secret = 'secret code';
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
}

function add(num1, num2) {
    return num1 + num2;
}

function fib(limit, current, prev) {
    if (current > limit) {
        return;
    }
    const newCurrent = add(current, prev);
    fib(limit, newCurrent, current);
    console.log(newCurrent)
}

console.log(fib(100, 0, 1));

const numbers = [0,1,2,3,4,5,6,7,8,9, 'a', 'b', 'c', 'd', 'e', 'f'];



let health = 100;
const myNumbers = [];

setInterval(() => {
    myNumbers.push(new MyNumber());
}, 4000)



function getRandomNumber() {
    return Math.floor(Math.random() * numbers.length);
}

class MyNumber{
    element = null;
    value = null;
    start = 0;
    id = null;
    constructor(){ 
        this.element = document.createElement('span');
        this.element.innerHTML = String(numbers[getRandomNumber()]);
        this.value = this.element.innerHTML;
        document.body.appendChild(this.element);
        this.element.style.position = 'absolute';
        this.id = setInterval(()=> {

            this.moveDown();
            if (this.start > 200) {
                health-= 10;
                console.log(health)
                clearInterval(this.id);
            } 

        }, 1000);
    }

    moveDown() {
        this.start += 20;
        console.log('second', this.start)
        this.element.style.top = this.start + 'px'
    }

    test(value) {
        if (this.value === value) {
            console.log('you got it', this.value)
            clearInterval(this.id);
            this.element.remove();
        }
    }
}

new MyNumber();

document.addEventListener('keydown', (event)=> {
    console.log(event.key)
    myNumbers.forEach(mn => {
        mn.test(String(event.key))
    });
})
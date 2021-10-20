const user = {
  name: "user 1",
};
const number = 1;
const number2 = number;

let user2 = {
    'name': "user 2"
};

user2 = user;


const favoriteFoods = [];
const favoriteMusic = [];


var aVarUser = {name};
function doWork(name) {
    log();
    const user = {
        name: name
    }
    console.log(user);
}

function log() {
    console.log('log')
}

if (true ) {
    let amyVar = 1;
}





const myUser =  doWork('james');




const memoryReality = [
    [{name: 'user1'}], [' '], [ ' '], [[]], [[]], [{name: 'user'}], 
]

const memoryExpectation = {
    user: memoryReality[0],
    number: memoryReality[2], 
    user2: memoryReality[10]
}
doWork();

const obj1 = {
    name: 'obj1',
    setListen() {
        document.addEventListener('click', function() {
            console.log(this.name)
        })
    }
}

const obj2 = {
    name: 'obj2',
    setListen() {
        document.addEventListener('click', () => {
            console.log(this.name)
        })
    }
}

obj1.setListen();
obj2.setListen();




const eventStack = [
    {user: ''}, 
];
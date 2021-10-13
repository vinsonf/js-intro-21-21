const array = ['a', 'b', 'c', 'd', 'e'];

array.forEach((thing, position, self) => {
    console.log(`
        item: ${thing},
        index: ${position},
        array: ${self}
    `);
});

for(let i = 11; i <= 10; i++) {
   console.log(i);
   if (i > 2000) {
       i = 200000;
   }
} 



let x = 20; 
let user = {};

while(user ) {
    x++;
    user = null;
    console.log(x);
}

let y = 20;

do {
    y++
    console.log(y);
} while( y < 10 )



console.log('done')
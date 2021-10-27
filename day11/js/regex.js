export const myRegex = /\w/;

const myString = `
    abc
`


console.log(myRegex.test('abc'))

function myScope() {
    let i = 0;
    console.log(i);

   return  ({ 
        inc: function increment() {
        i++;
        console.log(i);
        },
        dec: function decrement() {
            i--;
            console.log(i);
        }
    });

}


const obj = myScope()
const obj2 = myScope()

obj.inc();
obj.inc();
obj.inc();
obj2.dec();
obj2.dec();
obj2.dec();
obj.inc();


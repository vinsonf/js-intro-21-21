new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve(5);
    }, 10000)

})
.then(result => 4)
.then(result => 'yo')
.then( result => console.log(result))
.catch( error => console.log('something went wrong', error))
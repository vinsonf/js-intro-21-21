document.querySelector('button').addEventListener('mouseenter', function() {
    this.classList.add('shake');
    const myTimeout = setTimeout(() => {
        this.classList.remove('shake');  
    }, 3000);

    clearTimeout(myTimeout);
});



const intervalId = setInterval(() => {
    console.log('3 seconds')
    Math.random() >= .5 ? clearInterval(intervalId) : void(null);
}, 3000)



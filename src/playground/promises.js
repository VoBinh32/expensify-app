const promises = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'Binh',
            age: 20
        });
        // reject('Something went wrong!');
    }, 1500);
});

console.log('before');

promises.then((data) => {
    console.log('1', data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('this is ....');
        }, 1500);
    });

}).then((str) => {
    console.log('does it run?', str);
}).catch((error) => {
    console.log('error: ', error);
});



console.log('after');
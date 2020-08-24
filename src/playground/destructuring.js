// Object destructuring

// const person = {
//     name: 'Binh',
//     age: 25,
//     location: {
//         city: 'NYC',
//         temp: 20
//     }
// };

// const { name: firstName = 'Anomymous', age } = person

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);


// Array destructuring

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Palosaarentie', '19147'];
// const [, city, state = 'New York'] = address;
// console.log(`You are in ${state} ${city}.`);

const item = ['Coffee (ice)', '$2.00', '$2.25', '$2.75'];

const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);
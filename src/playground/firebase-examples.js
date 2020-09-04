// firebase.initializeApp(firebaseConfig);

// const database = firebase.database();

// child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // database.ref('expenses')
// //     .once('value')
// //     .then((snapshot) => {
// //         const expenses = [];
// //         snapshot.forEach((childSnapshot) => {
// //             expenses.push({
// //                 id: childSnapshot.key,
// //                 ...childSnapshot.val()
// //             });
// //         });
// //         console.log(expenses);
// //     });


// // database.ref('expenses')
// //     .on('value', (snapshot) => {
// //         const expenses = [];
// //         snapshot.forEach((childSnapshot) => {
// //             expenses.push({
// //                 id: childSnapshot.key,
// //                 ...childSnapshot.val()
// //             });
// //         });
// //         console.log(expenses);

// //     });

// database.ref('expenses').push({
//     description: 'Rentttt',
//     note: 'This is a monthly rent fee',
//     amount: 250,
//     createdAt: '1st September'
// });



// // database.ref('notes').push({
// //     title: 'Course Topics',
// //     body: 'React native, Angular, Python'
// // })

// // database.ref('notes/-MG582pfSAEawhjUkMCK').remove();
// // database.ref('location/city')
// //     .once('value')
// //     .then((snapshot) => {
// //         const val = snapshot.val();
// //         console.log(val);
// //     })
// //     .catch((e) => {
// //         console.log('error fecthing data', e);
// //     })


// // const onValueChange = database.ref().on('value', (snapshot) => {
// //     console.log(snapshot.val());
// // }, (e) => {
// //     console.log('Error with data fetching', e);
// // });

// // database.ref().on('value', (snapshot) => {
// //     const val = snapshot.val();
// //     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
// // });

// // setTimeout(() => {
// //     database.ref().off(onValueChange);
// // }, 7000);

// // setTimeout(() => {
// //     database.ref('age').set(35);
// // }, 10500);
// // database.ref().set({
// //     name: 'Binh Vo',
// //     stressLevel: 6,
// //     age: 20,
// //     job: {
// //         title: 'Software developer',
// //         company: 'Google'
// //     },
// //     location: {
// //         city: 'Vaasa',
// //         country: 'Finland'
// //     }
// // }).then(() => {
// //     console.log('Data is saved!');
// // }).catch((error) => {
// //     console.log('This failed', error);
// // });

// // database.ref().update({
// //     stressLevel: 9,
// //     'job/company': 'Amazon',
// //     'location/city': 'Seattle'
// // });

// // database.ref()
// //     .remove()
// //     .then(() => {
// //         console.log('Removed done!');
// //     })
// //     .catch(() => {
// //         console.log('There is an error!')
// //     });
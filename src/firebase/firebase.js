import * as fb from 'firebase';
// import expenses from '../tests/fixtures/expenses';

const config = {
  apiKey: 'AIzaSyAAG-3BNaNU4xQkUpUza5Yt7iwiAWzGRdg',
  authDomain: 'un1b3t-5c2a8.firebaseapp.com',
  databaseURL: 'https://un1b3t-5c2a8.firebaseio.com',
  projectId: 'un1b3t-5c2a8',
  storageBucket: 'un1b3t-5c2a8.appspot.com',
  messagingSenderId: '971279160465',
  appId: '1:971279160465:web:2ac62f4ed145151e255b30'
};

fb.initializeApp(config);
const db = fb.database();

export { fb, db as default };

// expenses.forEach(exp => {
//   db.ref('expenses').push({
//     description: exp.description,
//     note: exp.note,
//     amount: exp.amount,
//     createdAt: exp.createdAt,
//   });
// });

// db.ref().set({
//   name: 'Srinivas Gopalakrishnan',
//   age: 36,
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Chennai',
//     country: 'India'
//   }
// });

// db.ref('attributes').set({ height:183, weight:165 });

// db.ref('isSmart').remove()
//   .then(function() { console.log('Remove succeeded.'); })
//   .catch(function(error) { console.log('Remove failed: ' + error.message); });

// db.ref('isSmart').set(null);

// db.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Hyderabad'
// });

// db.ref().once('value')
//   .then(data => { console.log (`***data: ${JSON.stringify(data)}`); });

// setTimeout(() => db.ref('age').set(27), 3500);
// setTimeout(() => db.ref('age').set(29), 7000);
// setTimeout(() => db.ref('age').set(31), 10500);

// db.ref('expenses').on('value', data => {
//   data.forEach (exp => console.log ({ id: exp.key, ...exp.val() }));
// });

// db.ref('expenses').on('child_changed', exp => {
//   console.log ({ id: exp.key, ...exp.val() });
// });

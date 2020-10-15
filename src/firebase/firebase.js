import * as fb from 'firebase';
// import expenses from '../tests/fixtures/expenses';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
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

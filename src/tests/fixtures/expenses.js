import moment from 'moment';

export default [{
  id: 1,
  description: 'Water Bill Sep 2020',
  note: 'Paid online ref# 6AB2SY5',
  amount: 6800,
  createdAt: moment ('2020-10-01').valueOf()
},{
  id: 2,
  description: 'Electricity Bill Sep 2020',
  note: 'Was not paid on time. Meter Reader came to remind',
  amount: 47300,
  createdAt: moment ('2020-09-01').valueOf()
},{
  id: 3,
  description: 'Newspaper Bill Sep 2020',
  note: 'Stopped paper. Used only as use and throw placemats',
  amount: 44000,
  createdAt: moment ('2020-09-30').valueOf()
},{
  id: 4,
  description: 'Rent Sep 2020',
  note: 'Last payment for this address',
  amount: 3500000,
  createdAt: moment ('2020-10-03 21:09').valueOf()
}];

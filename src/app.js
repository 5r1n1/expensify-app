import moment from 'moment';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExp } from './actions/expenses';
import { getVisibleExpenses } from './selectors/expenses';

import './styles/styles.scss';
import 'normalize-css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';

import './firebase/firebase';

const store = configureStore();

const unsubscribe = store.subscribe (() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses (state.expenses, state.filters);
  console.log (visibleExpenses);
});

store.dispatch (addExp({
  description: 'Water Bill Jan 2019',
  note: 'Paid online ref# 6AB2SY5',
  amount: 6800,
  createdAt: moment ('2019-03-01').valueOf()
}));

store.dispatch (addExp({
  description: 'Electricity Bill Jan 2019',
  note: 'Was not paid on time. Meter Reader came to remind',
  amount: 47300,
  createdAt: moment ('2019-04-01').valueOf()
}));

store.dispatch (addExp({
  description: 'Newspaper Bill Jan 2019',
  note: 'Stopped paper. Used only as use and throw placemats',
  amount: 44000,
  createdAt: moment ('2019-05-01').valueOf()
}));

store.dispatch (addExp({
  description: 'Rent Jan 2019',
  note: 'Last payment for this address',
  amount: 109500,
  createdAt: moment ('2019-04-19 21:09').valueOf()
}));

unsubscribe();

const jsx =
  <Provider store={store}>
    <AppRouter />
  </Provider>;

ReactDOM.render (jsx, document.getElementById('app'));
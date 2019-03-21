import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './styles/styles.scss';
import 'normalize-css/normalize.css';
import AppRouter from './routers/AppRouter'

import configureStore from './store/configureStore';
import {addExpense, editExpense, removeExpense} from './actions/expenses';
import {getVisibleExpenses} from './selectors/expenses';
import {sortByAmount, sortByDate, setTextFilter, setDateRange} from './actions/filters';

const store = configureStore();

const unsubscribe = store.subscribe (() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses (state.expenses, state.filters)
  console.log (visibleExpenses);
});

const waterBill = store.dispatch (addExpense({
  description: 'Water Bill Jan 2019',
  note: 'Paid online ref# 6AB2SY5',
  amount: 6800,
}));

const currentBill = store.dispatch (addExpense({
  description: 'Electricity Bill Jan 2019',
  note: 'Was not paid on time. Meter Reader came to remind',
  amount: 47300,
}));

const paperBill = store.dispatch (addExpense({
  description: 'Newspaper Bill Jan 2019',
  note: 'Stopped paper. Used only as use and throw placemats',
  amount: 44000,
}));

store.dispatch (setTextFilter ({ text: 'bill' }));
store.dispatch (setTextFilter ({ text: 'paper' }));
store.dispatch (setTextFilter ());
store.dispatch (sortByAmount ());
store.dispatch (sortByDate ());

store.dispatch (removeExpense({ id: currentBill.txn.id }));

store.dispatch (editExpense({ 
  id: waterBill.txn.id,
  updates: { amount: 16800 },
}));

unsubscribe();

const jsx = 
  <Provider store={store}>
    <AppRouter />
  </Provider>

ReactDOM.render (jsx, document.getElementById('app'));
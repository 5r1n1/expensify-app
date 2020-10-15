import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  addExpense, addExp, editExpense, removeExpense
} from '../../actions/expenses';
import exp from '../fixtures/expenses';
import '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

describe('Testing Expense Action Generators...', () => {
  test('testing addExpense...', () => {
    const result = addExpense(exp[2]);
    expect(result).toHaveProperty('type', 'ADD_EXPENSE');
    expect(result).toHaveProperty('txn');
    expect(result.txn).toHaveProperty('id', exp[2].id);
    expect(result.txn).toHaveProperty('description', exp[2].description);
    expect(result.txn).toHaveProperty('note', exp[2].note);
    expect(result.txn).toHaveProperty('amount', exp[2].amount);
    expect(result.txn).toHaveProperty('createdAt', exp[2].createdAt);
  });

  test('testing addExp with data...', done => {
    const store = createMockStore({});
    console.log ('*************Outside*******************');
    store.dispatch(addExp(exp[1])).then(() => {
      console.log ('*************Inside*******************');
      const actions = store.getActions();
      expect (actions[0]).toHaveProperty('type', 'ADD_EXPENSE');
      expect (actions[0]).toHaveProperty('txn');
      expect(actions[0].txn).toHaveProperty('description', exp[1].description);
      expect(actions[0].txn).toHaveProperty('note', exp[1].note);
      expect(actions[0].txn).toHaveProperty('amount', exp[1].amount);
      expect(actions[0].txn).toHaveProperty('createdAt', exp[1].createdAt);
      done();

      // db.ref(`expenses/${actions[0].id}`).once('value').then(data => {
      //   expect(data.id).toBe(actions[0].id);
      //   expect(data.description).toBe(actions[0].description);
      //   expect(data.note).toBe(actions[0].note);
      //   expect(data.amount).toBe(actions[0].amount);
      //   expect(data.createdAt).toBe(actions[0].createdAt);
      //   done();
      // });

    }).catch(e => console.log(e));
  });

  test('testing editExpense...', () => {
    const result = editExpense('123abc', { description: 'new' });
    expect(result).toHaveProperty('type', 'EDIT_EXPENSE');
    expect(result).toHaveProperty('id', '123abc');
    expect(result).toHaveProperty('updates');
    expect(result.updates).toHaveProperty('description', 'new');
  });

  test('testing removeExpense...', () => {
    const result = removeExpense('123abc');
    expect(result).toHaveProperty('type', 'REMOVE_EXPENSE');
    expect(result).toHaveProperty('id', '123abc');
  });
});

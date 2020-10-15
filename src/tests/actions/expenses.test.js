import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  addExpense, addExp, editExpense, removeExpense
} from '../../actions/expenses';
import exp from '../fixtures/expenses';
import db from '../../firebase/firebase';

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
    const exp1 = {
      description: exp[1].description,
      note: exp[1].note,
      amount: exp[1].amount,
      createdAt: exp[1].createdAt,
    };
    store.dispatch(addExp(exp1)).then(() => {
      const actions = store.getActions();
      expect (actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        txn: { id: expect.any(String), ...exp1 }
      });

      return db.ref(`expenses/${actions[0].txn.id}`).once('value');
    }).then(data => {
      expect(data.val()).toEqual(exp1);
      done();
    });
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

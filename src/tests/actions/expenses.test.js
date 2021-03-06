import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  addExpense, editExpense, removeExpense, setExpenses,
  addExp, editExp, delExp, setExp
} from '../../actions/expenses';
import exp from '../fixtures/expenses';
import db from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);
const uid = 'fakeuserid';
const testAuthState = { auth: { uid } };

beforeEach(done => {
  const expData = {};
  exp.forEach(({ id, description, note, amount, createdAt }) => {
    expData[id] = { description, note, amount, createdAt };
    db.ref(`users/${uid}/expenses`).set(expData).then(() => done());
  });
});


describe('Testing Expense Action Generators...', () => {
  test('testing addExpense...', () => {
    const result = addExpense(exp[2]);
    expect(result).toHaveProperty('type', 'ADD_EXPENSE');
    expect(result).toHaveProperty('expense');
    expect(result.expense).toHaveProperty('id', exp[2].id);
    expect(result.expense).toHaveProperty('description', exp[2].description);
    expect(result.expense).toHaveProperty('note', exp[2].note);
    expect(result.expense).toHaveProperty('amount', exp[2].amount);
    expect(result.expense).toHaveProperty('createdAt', exp[2].createdAt);
  });

  test('testing addExp with data...', done => {
    const store = createMockStore(testAuthState);
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
        expense: { id: expect.any(String), ...exp1 }
      });
      const expenseId = actions[0].expense.id;
      return db.ref(`users/${uid}/expenses/${expenseId}`).once('value');
    }).then(data => {
      expect(data.val()).toEqual(exp1);
      done();
    });
  });

  test('testing addExp with no data (default)...', done => {
    const store = createMockStore(testAuthState);
    const defaultExp = {
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
    };
    store.dispatch(addExp({})).then(() => {
      const actions = store.getActions();
      expect (actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: { id: expect.any(String), ...defaultExp }
      });
      const expenseId = actions[0].expense.id;
      return db.ref(`users/${uid}/expenses/${expenseId}`).once('value');
    }).then(data => {
      expect(data.val()).toEqual(defaultExp);
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

  test('testing setExpenses...', () => {
    const result = setExpenses(exp);
    expect(result).toHaveProperty('type', 'SET_EXPENSES');
    expect(result).toHaveProperty('expenses', exp);
  });

  test('testing setExp...', done => {
    const store = createMockStore(testAuthState);
    store.dispatch(setExp()).then(() => {
      const actions = store.getActions();
      expect (actions[0].type).toEqual('SET_EXPENSES');
      done();
    });
  });

  test('testing delExp...', done => {
    const store = createMockStore({ expenses: exp, ...testAuthState });
    store.dispatch(delExp(exp[1].id)).then(() => {
      const actions = store.getActions();
      expect (actions[0].type).toEqual('REMOVE_EXPENSE');
      expect (actions[0].id).toEqual(exp[1].id);
      return db.ref(`users/${uid}/expenses/${exp[1].id}`).once('value');
    }).then(data => {
      expect(data.val()).toBeFalsy();
      done();
    });
  });

  test('testing editExp...', done => {
    const store = createMockStore({ expenses: exp, ...testAuthState });
    const updates = {
      description: 'edited description',
      note: 'edited note',
      amount: 123,
      createdAt: 123
    };
    store.dispatch(editExp(exp[1].id, updates)).then(() => {
      const actions = store.getActions();
      expect (actions[0].type).toEqual('EDIT_EXPENSE');
      expect (actions[0].id).toEqual(exp[1].id);
      expect (actions[0].updates).toEqual(updates);
      return db.ref(`users/${uid}/expenses/${exp[1].id}`).once('value');
    }).then(data => {
      expect(data.val()).toEqual(updates);
      done();
    });
  });
});

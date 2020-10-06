import moment from 'moment';
import expenses from '../fixtures/expenses';
import expensesReducer from '../../reducers/expenses';

describe('Testing Expenses Reducer...', () => {
  test('testing default state...', async() => {
    const state = expensesReducer(undefined, { type: '@@init' });
    expect(state).toEqual([]);
  });

  test('should add expense...', async() => {
    const txn = {
      id: 5,
      description: 'description123',
      note: 'notes123',
      amount: 2345,
      createdAt: moment('2020-10-05').valueOf()
    };
    const addAction = { type: 'ADD_EXPENSE', txn };
    const state = expensesReducer(expenses, addAction);
    expect(state).toHaveLength(5);
    expect(state[4]).toHaveProperty('description', 'description123');
    expect(state[4]).toHaveProperty('note', 'notes123');
    expect(state[4]).toHaveProperty('amount', 2345);
    expect(state[4]).toHaveProperty(
      'createdAt', moment('2020-10-05').valueOf()
    );
  });

  test('should edit expense...', async() => {
    const updates = {
      id: 1,
      description: 'description234',
      note: 'notes234',
    };
    const editAction = { type: 'EDIT_EXPENSE', id: 1, updates };
    const state = expensesReducer(expenses, editAction);
    expect(state).toHaveLength(4);
    expect(state[0]).toHaveProperty('description', 'description234');
    expect(state[0]).toHaveProperty('note', 'notes234');
    expect(state[0]).toHaveProperty('amount', 6800);
    expect(state[0]).toHaveProperty(
      'createdAt', moment('2020-10-01').valueOf()
    );
  });

  test('should not edit expense if incorrect id...', async() => {
    const updates = {
      id: 1,
      description: 'description234',
      note: 'notes234',
    };
    const editAction = { type: 'EDIT_EXPENSE', id: 17, updates };
    const state = expensesReducer(expenses, editAction);
    expect(state).toEqual(expenses);
  });

  test('should delete expense...', async() => {
    const removeAction = { type: 'REMOVE_EXPENSE', id: 1 };
    const state = expensesReducer(expenses, removeAction);
    expect(state).toHaveLength(3);
  });

  test('should not delete expense if invalid id...', async() => {
    const removeAction = { type: 'REMOVE_EXPENSE', id: 17 };
    const state = expensesReducer(expenses, removeAction);
    expect(state).toEqual(expenses);
  });
});

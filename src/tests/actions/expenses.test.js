import {
  removeExpense,
  addExpense,
  editExpense
} from '../../actions/expenses';

describe('Testing Expense Action Generators...', () => {
  test('testing addExpense with values...', () => {
    const result = addExpense({
      description: 'description123',
      note: 'notes123',
      amount: 2345,
      createdAt: 1555686915102
    });
    expect(result).toHaveProperty('type', 'ADD_EXPENSE');
    expect(result).toHaveProperty('txn');
    expect(result.txn).toHaveProperty('id');
    expect(result.txn).toHaveProperty('description', 'description123');
    expect(result.txn).toHaveProperty('note', 'notes123');
    expect(result.txn).toHaveProperty('amount', 2345);
    expect(result.txn).toHaveProperty('createdAt', 1555686915102);
  });

  test('testing addExpense with no values...', () => {
    const result = addExpense();
    expect(result).toHaveProperty('type', 'ADD_EXPENSE');
    expect(result).toHaveProperty('txn');
    expect(result.txn).toHaveProperty('id');
    expect(result.txn).toHaveProperty('description', '');
    expect(result.txn).toHaveProperty('note', '');
    expect(result.txn).toHaveProperty('amount', 0);
    expect(result.txn).toHaveProperty('createdAt');
  });

  test('testing editExpense...', () => {
    const result = editExpense(
      { id: '123abc', updates: { description: 'new' } }
    );
    expect(result).toHaveProperty('type', 'EDIT_EXPENSE');
    expect(result).toHaveProperty('id', '123abc');
    expect(result).toHaveProperty('updates');
    expect(result.updates).toHaveProperty('description', 'new');
  });

  test('testing removeExpense...', () => {
    const result = removeExpense({ id: '123abc' });
    expect(result).toHaveProperty('type', 'REMOVE_EXPENSE');
    expect(result).toHaveProperty('id', '123abc');
  });
});

import uuid from '../helpers/uuid.js';

export const addExpense = ({ description = '', note = '', amount = 0 } = {}) => ({
  type: 'ADD_EXPENSE',
  txn: {id: uuid(), createdAt: Date.now(), description, note, amount} ,
});

export const editExpense = ({ id, updates } = {}) => ({
  type: 'EDIT_EXPENSE', id, updates
});

export const removeExpense = ({ id } = {}) => ({ type: 'REMOVE_EXPENSE', id });

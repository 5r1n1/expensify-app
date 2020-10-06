import uuid from '../helpers/uuid.js';
import moment from 'moment';

export const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = moment().valueOf()
} = {}) => ({
  type: 'ADD_EXPENSE',
  txn: {
    id: uuid(),
    createdAt,
    description,
    note,
    amount
  },
});

export const editExpense = ({ id, updates } = {}) => ({
  type: 'EDIT_EXPENSE', id, updates
});

export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE', id
});

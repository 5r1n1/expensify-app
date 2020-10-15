import moment from 'moment';
import db from '../firebase/firebase';

export const addExpense = txn => ({ type: 'ADD_EXPENSE', txn });

export const addExp = (exp = {}) => dispatch => {
  const {
    description = '',
    note = '',
    amount = 0,
    createdAt = moment().valueOf()
  } = exp;
  const expense = { description, note, amount, createdAt };
  return db.ref('expenses').push(expense).then(res =>
    dispatch(addExpense({ id: res.key, ...expense }))
  );
};

export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE', id, updates
});

export const editExp = (id, updates) => dispatch =>
  db.ref(`expenses/${id}`).update(updates).then(res =>
    dispatch(editExpense(res.key, updates))
  );

export const removeExpense = id => ({ type: 'REMOVE_EXPENSE', id });

export const delExp = id => dispatch =>
  db.ref(`expenses/${id}`).remove().then(res =>
    dispatch(removeExpense(res.key))
  );

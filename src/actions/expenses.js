import moment from 'moment';
import db from '../firebase/firebase';

const defaultExp = {
  description: '',
  note: '',
  amount: 0,
  createdAt: moment().valueOf()
};

export const addExpense = txn => ({ type: 'ADD_EXPENSE', txn });

export const addExp = (exp = {}) => {
  return dispatch => {
    const expense = { ...defaultExp, ...exp };
    console.log('***Inside addExp****');
    return db.ref('expenses').push(expense).then(res => {
      dispatch(addExpense({ id: res.key, ...expense }));
      console.log ('*********addExpense dispatched************');
    });
  };
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

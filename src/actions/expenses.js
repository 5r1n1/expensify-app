import db from '../firebase/firebase';

export const addExpense = expense => ({ type: 'ADD_EXPENSE', expense });

export const addExp = (exp = {}) => (dispatch, getState) => {
  const uid = getState().auth.uid;
  const {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = exp;
  const expense = { description, note, amount, createdAt };
  return db.ref(`users/${uid}/expenses`).push(expense).then(result =>
    dispatch(addExpense({ id: result.key, ...expense }))
  );
};

export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE', id, updates
});

export const editExp = (id, updates) => (dispatch, getState) => {
  const uid = getState().auth.uid;
  return db.ref(`users/${uid}/expenses/${id}`).update(updates).then(_result =>
    dispatch(editExpense(id, updates))
  );
};

export const removeExpense = id => ({ type: 'REMOVE_EXPENSE', id });

export const delExp = id => (dispatch, getState) => {
  const uid = getState().auth.uid;
  return db.ref(`users/${uid}/expenses/${id}`).remove().then(_result =>
    dispatch(removeExpense(id))
  );
};

export const setExpenses = expenses => ({ type: 'SET_EXPENSES', expenses });

export const setExp = () => (dispatch, getState) => {
  const uid = getState().auth.uid;
  return db.ref(`users/${uid}/expenses`).once('value', data => {
    const expenses = [];
    data.forEach(exp => { expenses.push({ id:exp.key, ...exp.val() }); });
    dispatch(setExpenses(expenses));
  });
};

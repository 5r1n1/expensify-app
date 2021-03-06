const expenseReducerDefaultState = [];
export default (state = expenseReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE': return [...state, action.expense];
    case 'REMOVE_EXPENSE': return state.filter (({ id }) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map (exp => exp.id === action.id ?
        {...exp, ...action.updates} : exp);
    case 'SET_EXPENSES': return action.expenses;
    default: return state;
  }
};
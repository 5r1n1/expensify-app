import moment from 'moment'

export const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => 
  expenses.filter (expense => {
    const startDateMatch = startDate ? moment(expense.createdAt).isSameOrAfter (moment(startDate)) : true
    const endDateMatch = endDate ? moment(expense.createdAt).isSameOrBefore (moment(endDate)) : true 
    const textMatch = 
      typeof text !== 'string' ||
      expense.description.toLowerCase().includes (text.toLowerCase()) ||
      expense.note.toLowerCase().includes (text.toLowerCase());
    return startDateMatch && endDateMatch && textMatch
  }).sort ((a, b) => sortBy === 'amount' ?
    b.amount - a.amount :
    a.startDate - b.startDate
  );
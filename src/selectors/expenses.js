import moment from 'moment';

export const getVisibleExpenses = (
  expenses, { text, sortBy, startDate, endDate }
) => expenses.filter(expense => {
  const startDateMatch = startDate ?
    moment(expense.createdAt).isSameOrAfter(moment(startDate)) : true;
  const endDateMatch = endDate ?
    moment(expense.createdAt).isSameOrBefore(moment(endDate)) : true;
  const textMatch = typeof text !== 'string' ||
    expense.description.toLowerCase().includes(text.toLowerCase()) ||
    expense.note.toLowerCase().includes(text.toLowerCase());
  return startDateMatch && endDateMatch && textMatch;
}).sort((a, b) => sortBy === 'amount' ?
  a.amount - b.amount : a.createdAt - b.createdAt
);

export const getExpenseSummary = expenses => ({
  count: expenses.length,
  total: expenses.reduce((a, i) => a + i.amount, 0)
});

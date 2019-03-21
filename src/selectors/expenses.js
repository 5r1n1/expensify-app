export const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => 
  expenses.filter (expense => {
    const startDateMatch = 
      typeof startDate !== 'number' || 
      expense.createdAt >= startDate;
    const endDateMatch = 
      typeof endDate !== 'number' || 
      expense.createdAt <= endDate;
    const textMatch = 
      typeof text !== 'string' ||
      expense.description.toLowerCase().includes (text.toLowerCase()) ||
      expense.note.toLowerCase().includes (text.toLowerCase());
    return startDateMatch && endDateMatch && textMatch
  }).sort ((a, b) => sortBy === 'amount' ?
    b.amount - a.amount :
    a.startDate - b.startDate
  );
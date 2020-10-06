export const sortByAmount = () => ({ type: 'SET_SORT_BY', sortBy: 'amount' });

export const sortByDate = () => ({ type: 'SET_SORT_BY', sortBy: 'date' });

export const setSortBy = sortBy => ({ type: 'SET_SORT_BY', sortBy });

export const setTextFilter = ({ text = undefined } = {}) => ({
  type: 'SET_TEXT_FILTER', text
});

export const setDateRange = ({
  startDate = 0,
  endDate = Number.MAX_VALUE
} = {}) => ({
  type: 'SET_DATE_RANGE', startDate, endDate
});

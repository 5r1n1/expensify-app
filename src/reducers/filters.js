import moment from 'moment';

const filterReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: moment('2019-01-01'),
  endDate: moment('2020-12-31'),
};

export default (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER': return { ...state, text: action.text };
    case 'SET_SORT_BY': return { ...state, sortBy: action.sortBy };
    case 'SET_DATE_RANGE': return {
      ...state,
      startDate: action.startDate,
      endDate: action.endDate,
    };
    default: return { ...state };
  }
};

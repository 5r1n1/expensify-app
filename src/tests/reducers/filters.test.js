import moment from 'moment';
import filtersReducer from '../../reducers/filters';

describe('Testing Filters Reducer...', () => {
  test('testing default state...', async() => {
    const state = filtersReducer(undefined, { type: '@@init' });
    expect(state).toHaveProperty('text', '');
    expect(state).toHaveProperty('sortBy', 'date');
    expect(state).toHaveProperty('startDate', moment().startOf('month'));
    expect(state).toHaveProperty('endDate', moment().endOf('month'));
  });

  test('testing text filter...', async() => {
    const state = filtersReducer(undefined, {
      type: 'SET_SORT_BY',
      sortBy: 'amount'
    });
    expect(state).toHaveProperty('text', '');
    expect(state).toHaveProperty('sortBy', 'amount');
    expect(state).toHaveProperty('startDate', moment().startOf('month'));
    expect(state).toHaveProperty('endDate', moment().endOf('month'));
  });

  test('testing text filter...', async() => {
    const state = filtersReducer(undefined, {
      type: 'SET_SORT_BY',
      sortBy: 'date'
    });
    expect(state).toHaveProperty('text', '');
    expect(state).toHaveProperty('sortBy', 'date');
    expect(state).toHaveProperty('startDate', moment().startOf('month'));
    expect(state).toHaveProperty('endDate', moment().endOf('month'));
  });

  test('testing date filter...', async() => {
    const state = filtersReducer(undefined, {
      type: 'SET_DATE_RANGE',
      startDate: moment('2020-09-01').valueOf(),
      endDate: moment('2020-09-30').valueOf()
    });
    expect(state).toHaveProperty('text', '');
    expect(state).toHaveProperty('sortBy', 'date');
    expect(state).toHaveProperty('startDate', moment('2020-09-01').valueOf());
    expect(state).toHaveProperty('endDate', moment('2020-09-30').valueOf());
  });
});

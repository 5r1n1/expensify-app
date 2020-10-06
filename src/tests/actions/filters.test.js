import {
  sortByAmount,
  sortByDate,
  setSortBy,
  setTextFilter,
  setDateRange
} from '../../actions/filters';

describe('Testing Filter Action Generators...', () => {
  test('testing sortbyAmount filter...', () => {
    const result = sortByAmount();
    expect(result).toHaveProperty('type', 'SET_SORT_BY');
    expect(result).toHaveProperty('sortBy', 'amount');
  });

  test('testing sortbyDate filter...', () => {
    const result = sortByDate();
    expect(result).toHaveProperty('type', 'SET_SORT_BY');
    expect(result).toHaveProperty('sortBy', 'date');
  });

  test('testing sortbyDate filter...', () => {
    const result = sortByDate();
    expect(result).toHaveProperty('type', 'SET_SORT_BY');
    expect(result).toHaveProperty('sortBy', 'date');
  });

  test('testing sortby filter with amount...', () => {
    const result = setSortBy('amount');
    expect(result).toHaveProperty('type', 'SET_SORT_BY');
    expect(result).toHaveProperty('sortBy', 'amount');
  });

  test('testing sortby filter with date...', () => {
    const result = setSortBy('date');
    expect(result).toHaveProperty('type', 'SET_SORT_BY');
    expect(result).toHaveProperty('sortBy', 'date');
  });

  test('testing setTextFilter with text...', () => {
    const result = setTextFilter({ text: 'test123' });
    expect(result).toHaveProperty('type', 'SET_TEXT_FILTER');
    expect(result).toHaveProperty('text', 'test123');
  });

  test('testing setDateRange filter...', () => {
    const result = setDateRange({ startDate: 10, endDate: 20 });
    expect(result).toHaveProperty('type', 'SET_DATE_RANGE');
    expect(result).toHaveProperty('startDate', 10);
    expect(result).toHaveProperty('endDate', 20);
  });

  test('testing setDateRange filter no input...', () => {
    const result = setDateRange();
    expect(result).toHaveProperty('type', 'SET_DATE_RANGE');
    expect(result).toHaveProperty('startDate', 0);
    expect(result).toHaveProperty('endDate', Number.MAX_VALUE);
  });
});

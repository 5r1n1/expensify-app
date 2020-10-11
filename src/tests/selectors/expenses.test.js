import moment from 'moment';
import {
  getVisibleExpenses,
  getExpenseSummary
} from '../../selectors/expenses';
import expenses from '../fixtures/expenses';

describe('Testing Visible Expenses...', () => {
  test('testing text filter...', async() => {
    const txtFilter = {
      text: 'Bill',
      sortBy: '',
      startDate: moment(0).valueOf(),
      endDate: undefined,
    };
    const result = getVisibleExpenses (expenses, txtFilter);
    expect(result).toHaveLength(3);
    expect(result[0]).toHaveProperty('id', 2);
    expect(result[1]).toHaveProperty('id', 3);
    expect(result[2]).toHaveProperty('id', 1);
  });

  test('testing filter by Start Date...', async() => {
    const startDateFilter = {
      text: '',
      sortBy: '',
      startDate: moment ('2020-09-05').valueOf(),
      endDate: undefined,
    };
    const result = await getVisibleExpenses (expenses, startDateFilter);
    expect(result).toHaveLength(3);
    expect(result[0]).toHaveProperty('id', 3);
    expect(result[1]).toHaveProperty('id', 1);
    expect(result[2]).toHaveProperty('id', 4);
  });

  test('testing filter by End Date...', async() => {
    const endDateFilter = {
      text: '',
      sortBy: '',
      startDate: undefined,
      endDate: moment ('2020-09-30').valueOf(),
    };
    const result = await getVisibleExpenses (expenses, endDateFilter);
    expect(result).toHaveLength(2);
    expect(result[0]).toHaveProperty('id', 2);
    expect(result[1]).toHaveProperty('id', 3);
  });

  test('testing setDateRange...', async() => {
    const dateFilter = {
      text: '',
      sortBy: '',
      startDate: moment ('2020-08-30').valueOf(),
      endDate: moment ('2020-09-02').valueOf(),
    };
    const result = await getVisibleExpenses (expenses, dateFilter);
    expect(result).toHaveLength(1);
    expect(result[0]).toHaveProperty('id', 2);
  });

  test('testing sortByDate...', () => {
    const dateSort = {
      text: '',
      sortBy: 'date',
      startDate: moment(0).valueOf(),
      endDate: undefined,
    };
    const result = getVisibleExpenses (expenses, dateSort);
    expect(result[0]).toHaveProperty('id', 2);
    expect(result[1]).toHaveProperty('id', 3);
    expect(result[2]).toHaveProperty('id', 1);
    expect(result[3]).toHaveProperty('id', 4);
  });

  test('testing sortByAmount...', () => {
    const amountSort = {
      text: '',
      sortBy: 'amount',
      startDate: moment(0).valueOf(),
      endDate: undefined,
    };
    const result = getVisibleExpenses (expenses, amountSort);
    expect(result[0]).toHaveProperty('id', 1);
    expect(result[1]).toHaveProperty('id', 3);
    expect(result[2]).toHaveProperty('id', 2);
    expect(result[3]).toHaveProperty('id', 4);
  });
});

describe('Testing Expense Summary...', () => {
  test('testing with no expenses...', async() => {
    const result = getExpenseSummary([]);
    expect(result.count).toBe(0);
    expect(result.total).toBe(0);
  });

  test('testing with single expenses...', async() => {
    const result = getExpenseSummary([expenses[0]]);
    expect(result.count).toBe(1);
    expect(result.total).toBe(6800);
  });

  test('testing with multiple expenses...', async() => {
    const result = getExpenseSummary(expenses);
    expect(result.count).toBe(4);
    expect(result.total).toBe(3598100);
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import filters from '../fixtures/filters';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';

let onTextChange, onSortChange, onDatesChange, wrapper;
const dateRange = { startDate: filters.startDate, endDate: filters.endDate };

beforeEach(() => {
  onTextChange = jest.fn();
  onSortChange = jest.fn();
  onDatesChange = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={onTextChange}
      setSortBy={onSortChange}
      setDateRange={onDatesChange}
    />
  );
});

describe('Testing ExpenseListFilters Component...', () => {
  test('should render ExpenseListFilters correctly...', async() => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  test('should handle text change...', async() => {
    wrapper.find('input')
      .simulate('change', { target: { value: filters.text } });
    expect(onTextChange).toHaveBeenLastCalledWith(filters.text);
  });

  test('should handle sortBy change...', async() => {
    wrapper.find('select')
      .simulate('change', { target: { value: filters.sortBy } });
    expect(onSortChange).toHaveBeenLastCalledWith(filters.sortBy);
  });

  test('should handle date change...', async() => {
    wrapper.find('withStyles(DateRangePicker)')
      .prop('onDatesChange')(dateRange);
    expect(onDatesChange).toHaveBeenLastCalledWith(dateRange);
  });
});

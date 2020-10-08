import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import expenses from '../fixtures/expenses';
import { AddExpensePage } from '../../components/AddExpensePage';

let onSubmit, history, wrapper;

beforeEach(() => {
  onSubmit = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddExpensePage addExpense={onSubmit} history={history} />);

});

describe('Testing AddExpensePage Component...', () => {
  test('should render AddExpensePage correctly...', async() => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  test('should handle onSubmit...', async() => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(onSubmit).toHaveBeenLastCalledWith(expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
  });
});

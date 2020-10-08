import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import expenses from '../fixtures/expenses';
import { EditExpensePage } from '../../components/EditExpensePage';

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<EditExpensePage
    expense = {expenses[1]}
    editExpense = {editExpense}
    removeExpense = {removeExpense}
    history = {history}
  />);
});

describe('Testing EditExpensePage Component...', () => {
  test('should render EditExpensePage correctly...', async() => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  test('should handle editExpense...', async() => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
  });

  test('should handle removeExpense...', async() => {
    wrapper.find('button').simulate('click');
    expect(removeExpense).toHaveBeenLastCalledWith(expenses[1].id);
    expect(history.push).toHaveBeenLastCalledWith('/');
  });
});

import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import expenses from '../fixtures/expenses';
import ExpenseForm from '../../components/ExpenseForm';

describe('Testing ExpenseForm Component...', () => {
  test('should render ExpenseForm correctly...', async() => {
    const wrapper = shallow(<ExpenseForm />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  test('should render ExpenseForm with expense data...', async() => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  test('should render error for invalid form submission...', async() => {
    const wrapper = shallow(<ExpenseForm expense={[]}/>);
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });
    expect(wrapper.state('error')).toEqual('Please provide all information');
  });

  test('should set description...', async() => {
    const value = 'Test Description 123';
    const wrapper = shallow(<ExpenseForm expense={[]}/>);
    wrapper.find('input').at(0).simulate('change', { target: { value } });
    expect(wrapper.state('description')).toEqual(value);
  });

  test('should set note...', async() => {
    const value = 'Test Note 123';
    const wrapper = shallow(<ExpenseForm expense={[]}/>);
    wrapper.find('textarea').simulate('change', { target: { value } });
    expect(wrapper.state('note')).toEqual(value);
  });

  test('should set amount if valid...', async() => {
    const value = '123.45';
    const wrapper = shallow(<ExpenseForm expense={[]}/>);
    wrapper.find('input').at(1).simulate('change', { target: { value } });
    expect(wrapper.state('amount')).toEqual(value);
  });

  test('should not set amount if invalid...', async() => {
    const value = '123.456';
    const wrapper = shallow(<ExpenseForm expense={[]}/>);
    wrapper.find('input').at(1).simulate('change', { target: { value } });
    expect(wrapper.state('amount')).toEqual(undefined);
  });

  test('should call onSubmit when form submitted...', async() => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(
      <ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />
    );
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
      description: expenses[0].description,
      note: expenses[0].note,
      amount: expenses[0].amount,
      createdAt: expenses[0].createdAt
    });
  });

  test('should set new date on date change...', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm expense={[]}/>);
    wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
  });

  test('should set Focused on onFocuschange...', () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm expense={[]}/>);
    wrapper.find('withStyles(SingleDatePicker)')
      .prop('onFocusChange')({ focused });
    expect(wrapper.state('calFocused')).toEqual(focused);
  });
});

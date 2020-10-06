import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import expenses from '../fixtures/expenses';
import { ExpenseList } from '../../components/ExpenseList';

describe('Testing Expenselist Component...', () => {
  test('should render ExpenseList with expenses...', async() => {
    const wrapper = shallow(<ExpenseList expenses={expenses}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  test('should render ExpenseList with no expenses...', async() => {
    const wrapper = shallow(<ExpenseList expenses={[]}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});

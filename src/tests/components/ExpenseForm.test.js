import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import ExpenseForm from '../../components/ExpenseForm';

describe('Testing ExpenseForm Component...', () => {
  test('should render ExpenseForm...', async() => {
    const wrapper = shallow(<ExpenseForm />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});

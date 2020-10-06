import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';

describe('Testing ExpenseDashboardPage Component...', () => {
  test('should render ExpenseDashboardPage...', async() => {
    const wrapper = shallow(<ExpenseDashboardPage />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});

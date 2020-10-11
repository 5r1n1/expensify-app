import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { ExpenseSummary } from '../../components/ExpenseSummary';

describe('Testing ExpenseSummary Component...', () => {
  test('should render ExpenseSummary correctly...', () => {
    const wrapper = shallow(<ExpenseSummary />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  test('should render ExpenseSummary with single expense...', () => {
    const wrapper = shallow(<ExpenseSummary count={1} total={6800}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  test('should render ExpenseSummary with multiple expenses...', () => {
    const wrapper = shallow(<ExpenseSummary count={4} total={3589100}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});

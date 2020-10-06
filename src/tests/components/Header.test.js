import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Header from '../../components/Header';

describe('Testing Header Component...', () => {
  test('should render Header correctly...', async() => {
    const wrapper = shallow(<Header/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});

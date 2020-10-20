import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { LoginPage } from '../../components/LoginPage';

describe('Testing LoginPage Component...', () => {
  test('should render LoginPage correctly...', () => {
    const wrapper = shallow(<LoginPage/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  test('should call Logout properly...', async() => {
    const startLogin = jest.fn();
    const wrapper = shallow(<LoginPage startLogin={startLogin}/>);
    wrapper.find('button').simulate('click');
    expect(startLogin).toBeCalled();
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import NotFoundPage from '../../components/NotFoundPage';

describe('Testing NotFoundPage Component...', () => {
  test('should render NotFoundPage...', async() => {
    const wrapper = shallow(<NotFoundPage />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});

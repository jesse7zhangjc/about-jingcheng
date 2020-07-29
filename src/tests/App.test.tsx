import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import App from 'App';

test('renders correctly', () => {
  const component = shallow(<App />);
  expect(toJSON(component)).toMatchSnapshot();
});

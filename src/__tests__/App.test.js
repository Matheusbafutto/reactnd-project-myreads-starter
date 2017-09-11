import React from 'react'
import App from '../App'

it('renders without crashing', () => {
  expect(shallow(<App />)).toMatchSnapshot();
});

import React from 'react'
import App from './App'

/**
 This course is not designed to teach Test Driven Development.
 Feel free to use this file to test your application, but it
 is not required.
**/

it('renders without crashing', () => {
  expect(shallow(<App />)).toMatchSnapshot();
})

it('mounts my component', () => {
  const wrapper = shallow(
    <div className="my-component">
      <strong>Hello World!</strong>
    </div>
  );

  expect(wrapper).toMatchSnapshot();
});

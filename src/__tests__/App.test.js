import React from 'react'
import App from '../App'

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

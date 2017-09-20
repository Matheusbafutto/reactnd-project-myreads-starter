import React from 'react'
import SearchPage from '../components/SearchPage'
import { BrowserRouter } from 'react-router-dom'

const onBookChange = () => {}
const booksOnShelves = []

it('renders without crashing', () => {
  expect(shallow(<SearchPage booksOnShelves={booksOnShelves} onBookChange={onBookChange} />)).toMatchSnapshot();
});

it('change on searchbar trigers search handler',() => {
  let searchPageWrapper = shallow(<BrowserRouter><SearchPage onBookChange={onBookChange} booksOnShelves={books}/></BrowserRouter>);

  let dummyWrapper = searchPageWrapper.find(SearchPage).dive();
  dummyWrapper.instance().handleChange = jest.fn((event) => { console.log('trigered'); } );
  dummyWrapper.update();
  expect(dummyWrapper.find('input').find({ prop: 'onChange' })).toMatchSnapshot();
  console.log(dummyWrapper.find('input').find({ prop: 'onChange' }));

  dummyWrapper.find('input').simulate('change',{ target: { value:'art' } });
  expect(dummyWrapper.instance().handleChange).toHaveBeenCalled();
});

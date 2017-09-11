import React from 'react'
import Bookshelf from '../components/Bookshelf'

const onBookChange = () => {}
const books = []

it('renders without crashing', () => {
  expect(shallow(<Bookshelf onBookChange={onBookChange} books={books} />)).toMatchSnapshot();
})

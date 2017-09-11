import React from 'react'
import BookList from '../components/BookList'

const onBookChange = () => {}
const books = []

it('renders without crashing', () => {
  expect(shallow(<BookList books={books} onBookChange={onBookChange} />)).toMatchSnapshot();
})

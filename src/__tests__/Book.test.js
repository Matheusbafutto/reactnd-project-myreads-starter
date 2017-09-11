import React from 'react'
import Book from '../components/Book'

const Proptypes = {
  shape: {},
  string: {},
  func: {},
}

const book = {
  imageLinks: { thumbnail: 'mock' },
  title: 'teste',
  author: 'Matheus'
}

const onBookChange = () => {}

it('renders without crashing', () => {
  expect(shallow(<Book book={book} onBookChange={onBookChange} />)).toMatchSnapshot();
})

import React from 'react'
import SearchPage from '../components/SearchPage'

const onBookChange = () => {}
const booksOnShelves = []

it('renders without crashing', () => {
  expect(shallow(<SearchPage booksOnShelves={booksOnShelves} onBookChange={onBookChange} />)).toMatchSnapshot();
})

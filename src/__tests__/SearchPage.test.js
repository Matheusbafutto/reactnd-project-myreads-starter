import React from 'react'
import SearchPage from '../components/SearchPage'
import { BrowserRouter } from 'react-router-dom'

const onBookChange = () => {}
const booksOnShelves = []

it('renders without crashing', () => {
  expect(shallow(<SearchPage booksOnShelves={booksOnShelves} onBookChange={onBookChange} />)).toMatchSnapshot();
});

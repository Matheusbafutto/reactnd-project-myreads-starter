import React from 'react'
import BookList from '../components/BookList'

it('renders without crashing', () => {
  expect(shallow(<BookList books={books} onBookChange={onBookChange} />)).toMatchSnapshot();
});

it('renderBook renders book properly', () => {
  const BookListWrapper = shallow(<BookList books={books} onBookChange={onBookChange} />);
  const output = BookListWrapper.instance().renderBook(book, 0);
  expect(output).toMatchSnapshot();
});

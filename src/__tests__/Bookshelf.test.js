import React from 'react'
import Bookshelf from '../components/Bookshelf'

it('renders without crashing', () => {
  expect(shallow(<Bookshelf shelfName='Read' onBookChange={onBookChange} books={books} />)).toMatchSnapshot();
});

it('matchBookToShelf method works properly',() => {
  const BookshelfWrapper = shallow(<Bookshelf shelfName='Read' onBookChange={onBookChange} books={books} />);
  expect(BookshelfWrapper.instance().matchBookToShelf(books)).toBe(true);
});

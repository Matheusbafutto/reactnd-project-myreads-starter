import React from 'react'
import Book from '../components/Book'

const Proptypes = {
  shape: {},
  string: {},
  func: {},
}

//basic shallow render test
it('renders book without crashing', () => {
  expect(shallow(<Book book={book} onBookChange={onBookChange} />)).toMatchSnapshot();
});

//test bookshelf change handler
describe('Bookshelf change handler',() => {

  let bookWrapper = mount(<Book book={book} onBookChange={onBookChange} />);
  bookWrapper.find('select').simulate('change', { taget:{ value:'read' } });

  it('select book dropdown menu calls handler', () => {
    expect(onBookChange).toHaveBeenCalled();
  });

  it('select book handler gets called only once', () => {
    expect(onBookChange.mock.calls.length).toBe(1);
  });
});

//test placebook function
describe('placeBook function', () => {

  const bookWrapper = shallow(<Book book={book} onBookChange={onBookChange} />);

  it('book without shelf atribute',() => {
    expect(bookWrapper.instance().placeBook({  })).toBe('none');
  });
  it('book with shelf atribute',() => {
    expect(bookWrapper.instance().placeBook({ shelf:'read' })).toBe('read');
  });
});

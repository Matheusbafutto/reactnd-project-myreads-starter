import React from 'react'
import App from '../App'

jest.mock('../BooksAPI');

it('renders without crashing', () => {
  expect(shallow(<App />)).toMatchSnapshot();
});

const mockBook = { title: 'Branca de Neve', shelf: 'read' }
const mockBookArray = [
  { title: 'Arte da guerra' },
  { title: 'Comer rezar amar' },
  { title: 'Rise of the Lich King' },
  { title: 'Branca de Neve' },
  { title: 'Alice' },
]

it('removeBookFromArray working properly', () => {

  let app = shallow(<App/>);
  expect(
    app.instance().removeBookFromArray(mockBook, mockBookArray))
      .toEqual([
        { title: 'Arte da guerra' },
        { title: 'Comer rezar amar' },
        { title: 'Rise of the Lich King' },
        { title: 'Alice' },
      ])

})

describe('App handleBookShelfChange', () => {
  it('App mounts correctly given working API', () => {
    mount(<App/>);
  })
  it('Changes bookshelf from a book in state', () => {
    let app = shallow(<App/>);
    app.setState({
      booksOnShelves: [
          {
            title: 'Arte da guerra',
             shelf:'Read',
             imageLinks: { thumbnail:'oi' }
           },
          {
            title: 'Comer rezar amar',
             shelf:'wantToRead',
             imageLinks: { thumbnail:'oi' }
           },
          {
            title: 'Rise of the Lich King',
             shelf:'currentlyReading',
             imageLinks: { thumbnail:'oi' }
           },
          {
            title: 'Branca de Neve',
             shelf:'Read',
             imageLinks: { thumbnail:'oi' }
           },
          {
            title: 'Alice',
             shelf:'Read',
             imageLinks: { thumbnail:'oi' }
           },
      ]
    });
    let expectedArray = [
      { title: 'Arte da guerra',
      shelf: 'Read',
      imageLinks: { thumbnail: 'oi' } },
      { title: 'Comer rezar amar',
      shelf: 'wantToRead',
      imageLinks: { thumbnail: 'oi' } },
      { title: 'Rise of the Lich King',
      shelf: 'currentlyReading',
      imageLinks: { thumbnail: 'oi' } },
      { title: 'Alice',
      shelf: 'Read',
      imageLinks: { thumbnail: 'oi' } },
      { title: 'Branca de Neve', shelf: 'wantToRead' }
    ];
    expect(app.instance()
      .handleBookShelfChange('wantToRead', mockBook))
      .toEqual(expectedArray);
  })
})

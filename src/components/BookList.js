import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
import '../App.css'
import Book from './Book'

/**
  Class that represents a list of Books
  @extends Component
*/
class BookList extends Component {

  /**
    Creates an instance of BookList component
    @param {object} props - props from parent component
    @param {book[]} props.books - array of books
    @param {function} props.onBookChange - handler for Book select controlled component
  */
  constructor(props) {
    super(props);
  }

  /**
    Renders Book components into the DOM as list items
    @param {book} book - Book object to be rendered in the DOM
    @param {number} i - Book key in the mapping array
    @return {jsx} - jsx corresponding to a list item with a Book component inside
  */
  renderBook = (book, i) => {
    let { onBookChange } = this.props;
    return(
      <li key={i}>
      <Book
        book={book}
        onBookChange={onBookChange}
      />
      </li>
    )
  }

  /**
    Renders BookList component
  */
  render() {
    return(
      <ol className="books-grid">
        { this.props.books.map(this.renderBook) }
      </ol>
    );
  }
}

export default BookList;

import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
import '../App.css'
import Book from './Book'

class BookList extends Component {

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

  render() {
    return(
      <ol className="books-grid">
        { this.props.books.map(this.renderBook) }
      </ol>
    );
  }
}

export default BookList;

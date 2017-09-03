import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
import '../App.css'
import Book from './Book'

class Bookshelf extends Component {

  constructor(props) {
    super(props);

    this.matchBookToShelf = this.matchBookToShelf.bind(this);
  }

  renderBook = (book, i) => {
    return(
      <li key={i}>
      <Book
        title={book.title}
        previewLink={book.imageLinks.thumbnail}
        author={book.author}
      />
      </li>
    )
  }

  matchBookToShelf(book) {
    let name = this.props.shelfName.replace(new RegExp(' ', 'g'), '');
    return book.shelf.toUpperCase() === name.toUpperCase();
  }

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            { this.props.books.filter(this.matchBookToShelf).map(this.renderBook) }
          </ol>
        </div>
      </div>
    );
  }

}

export default Bookshelf;

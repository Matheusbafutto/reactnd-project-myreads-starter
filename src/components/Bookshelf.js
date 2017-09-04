import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
import '../App.css'
import BookList from './BookList'

class Bookshelf extends Component {

  constructor(props) {
    super(props);

    this.matchBookToShelf = this.matchBookToShelf.bind(this);
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
          <BookList
            books={this.props.books.filter(this.matchBookToShelf)}
            onBookChange={this.props.onBookChange}
            shelfName={this.props.shelfName}
          />
        </div>
      </div>
    );
  }

}

export default Bookshelf;

import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
import '../App.css'
import Book from './Book'

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

class Bookshelf extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: [],
    }
    this.matchBookToShelf = this.matchBookToShelf.bind(this);
  }


  matchBookToShelf(book) {
    let shelfName = this.props.shelfName.replaceAll(' ', '');
    return book.shelf.toUpperCase() === shelfName.toUpperCase();
  }

  renderBook = (book, i) => {
    return(
      <li key={i}>
      <Book
        title={book.title}
        previewLink={book.previewLink}
        author={book.author}
      />
      </li>
    )
  }

  componentDidMount() {
    BooksAPI.getAll().then((result) => {
      result = result.filter(this.matchBookToShelf);
      this.setState({
        books: result,
      });
    });
  }

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            { this.state.books.map(this.renderBook) }
          </ol>
        </div>
      </div>
    );
  }

}

export default Bookshelf;

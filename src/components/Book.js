import React, { Component } from 'react'
import BooksAPI from '../BooksAPI'
import '../App.css'

class Book extends Component {

  constructor(props) {
    super(props);
  }

  placeBook() {
    return (this.props.book.hasOwnProperty('shelf')) ? this.props.book.shelf : 'none';
  }

  render() {
    let { onBookChange } = this.props;

    return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${ this.props.book.imageLinks.thumbnail }")` }}></div>
          <div className="book-shelf-changer">
            <select value={this.placeBook()} onChange={ (event) => onBookChange(event.target.value, this.props.book) }>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.author}</div>
      </div>
    );
  }

}

export default Book;

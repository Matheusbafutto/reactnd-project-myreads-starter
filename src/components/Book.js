import React, { Component } from 'react'
import Proptypes from 'prop-types'
import '../App.css'

/**
  Class representing a Book Component
*/
class Book extends Component {

  /**
    Creates an instance of Book
    @param {object} props - properties passed along from parent component
    @param {function} props.onBookChange - handler for Book select controlled component
    @param {book} props.book - book object with specific information about this Book component
  */
  constructor(props) {
    super(props);
  }

  /**
    Checks if the book object given on props has a property shelf or not
    @return {string} - none if shelf is non existant or shelf name otherwise
  */
  placeBook(book) {
    return (book.hasOwnProperty('shelf')) ? book.shelf : 'none';
  }

  /**
    Renders a Book component into the DOM
  */
  render() {
    let { onBookChange } = this.props;

    return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${ this.props.book.imageLinks.thumbnail }")` }}></div>
          <div className="book-shelf-changer">
            <select
              value={this.placeBook(this.props.book)}
              onChange={ (event) => {
                // console.log(event);
                onBookChange(event.target.value, this.props.book);
              }
            }>
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

Book.propTypes = {
  book: Proptypes.shape({
    imageLinks: Proptypes.shape({
      thumbnail: Proptypes.string
    }),
    title: Proptypes.string,
    author: Proptypes.string
  }).isRequired,
  onBookChange: Proptypes.func.isRequired
}

export default Book;

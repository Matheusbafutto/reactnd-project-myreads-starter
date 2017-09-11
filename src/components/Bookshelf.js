import React, { Component } from 'react'
import '../App.css'
import BookList from './BookList'
import Proptypes from 'prop-types'

/**
  Class that represents a Bookshelf
  @extends Component
*/
class Bookshelf extends Component {

  /**
    Creates an instance of Bookshelf
    @param {object} props - props received from parent component
    @param {function} props.onBookChange - handler for Book select controlled component
    @param {book[]} props.books - array of all books on all shelves
    @param {string} props.shelfName - name of the shelf component
  */
  constructor(props) {
    super(props);

    this.matchBookToShelf = this.matchBookToShelf.bind(this);
  }


  /**
    Matches names of the Bookshelf component with the specified book
    @param {book} book - book whose shelf needs to be verified
    @return {bool} - true if book belongs to Bookshelf and false otherwise
  */
  matchBookToShelf(book) {
    let name = this.props.shelfName.replace(new RegExp(' ', 'g'), '');
    return book.shelf.toUpperCase() === name.toUpperCase();
  }

  /**
    Renders Bookshelf component
  */
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfName}</h2>
        <div className="bookshelf-books">
          <BookList
            books={this.props.books.filter(this.matchBookToShelf)}
            onBookChange={this.props.onBookChange}
          />
        </div>
      </div>
    );
  }

}

Bookshelf.propTypes = {
  books: Proptypes.arrayOf(
    Proptypes.shape({
      imageLinks: Proptypes.shape({
        thumbnail: Proptypes.string
      }),
      title: Proptypes.string,
      author: Proptypes.string
    })
  ).isRequired,
  onBookChange: Proptypes.func.isRequired,
  shelfName: Proptypes.string
}

export default Bookshelf;

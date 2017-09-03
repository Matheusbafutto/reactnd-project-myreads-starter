import React, { Component } from 'react'
import BooksAPI from '../BooksAPI'
import '../App.css'

class Book extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let { onBookChange } = this.props;

    return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${ this.props.previewLink }")` }}></div>
          <div className="book-shelf-changer">
            <select onChange={ (event) => onBookChange(event.target.value) }>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.title}</div>
        <div className="book-authors">{this.props.author}</div>
      </div>
    );
  }

}

export default Book;

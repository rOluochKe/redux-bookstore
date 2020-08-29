/* eslint-disable max-len */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { handleRemoveBook } from '../actions/index';

const BooksList = ({ book, handleRemoveBook }) => (
  <table className="table-one">
    <thead>
      <tr>
        <th className="trow">Book ID</th>
        <th className="trow">Title</th>
        <th className="trow">Category</th>
      </tr>
    </thead>
    <tbody>
      {book.map(book => <Book key={Math.random() * 1000} book={book} handleRemoveBook={handleRemoveBook} />)}
    </tbody>
  </table>
);
BooksList.propTypes = {
  book: PropTypes.instanceOf(Array).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

const mapStateToProps = book => ({ book });

const mapDispatchToProps = dispatch => ({
  handleRemoveBook: book => {
    dispatch(handleRemoveBook(book));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);

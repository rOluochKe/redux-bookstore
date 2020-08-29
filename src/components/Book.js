import React from 'react';
import PropTypes from 'prop-types';

export default function Books({ book, handleRemoveBook }) {
  return (
    <tr claasName="erow" key={book.id}>
      <td className="trow">{book.id}</td>
      <td className="trow">{book.title}</td>
      <td className="trow">{book.category}</td>
      <td className="trow">
        <button className="btn3" type="submit" onClick={() => handleRemoveBook(book)}>
          Remove Book
        </button>
      </td>
    </tr>
  );
}

Books.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

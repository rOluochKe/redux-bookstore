const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const createBook = book => ({
  type: CREATE_BOOK,
  book,
});

const handleRemoveBook = book => ({
  type: REMOVE_BOOK,
  book,
});

const CHANGE_FILTER = book => ({
  type: 'CHANGE_FILTER',
  book,
});

export {
  CREATE_BOOK, REMOVE_BOOK, CHANGE_FILTER, createBook, handleRemoveBook,
};

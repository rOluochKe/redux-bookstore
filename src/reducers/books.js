import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

const initialBooks = [
  { id: 1, title: 'A Wrinkle in Time', category: 'Sci-Fi' },
  { id: 2, title: 'The Hobbit', category: 'Kids' },
  { id: 3, title: 'Pride and Prejudice', category: 'History' },
];

const bookReducer = (state = initialBooks, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.book];

    case REMOVE_BOOK:
      return (state.filter(book => book.id !== action.book.id));

    default:
      return state;
  }
};

export default bookReducer;

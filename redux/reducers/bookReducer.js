import { ADD_BOOKS, MARK_BOOK_STATUS,SET_GET_BOOK_REQUEST_STATUS,SET_SORT_CATEGORIA, SET_SORT_READ,SET_SORT_DATE } from "../types/books";



const initialState = {
  allBooks: undefined,
  bookRequestStatus:undefined,
  Read:'Todos',
  Categoria:'Todos',
  date:'Todos',
};

function bookReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOKS:
      return {...state, allBooks:action.payload};
  
    case MARK_BOOK_STATUS:
      const {bookId, status} = action.payload;
      const newState = {...state};
      const allBooks = newState.allBooks.map((book) => {
        if (book.id === bookId) {
          book.hasBeenReadByUser = true;
        }
        return book;
      });
      console.log('book changes', allBooks);
      return {...state, allBooks: allBooks};

    case SET_GET_BOOK_REQUEST_STATUS:
      return {...state, bookRequestStatus:action.payload};

    case SET_SORT_READ:
      return {...state, Read:action.payload }

    case SET_SORT_CATEGORIA:
      return {...state, Categoria:action.payload }

    case SET_SORT_DATE:
      return {...state, date:action.payload }

    default:
      return state;
  }
}

export default bookReducer;

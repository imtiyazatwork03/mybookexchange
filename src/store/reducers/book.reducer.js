import * as actionTypes from '../types/book.type';

const initialState = {
    books: [],
    book: {} ,
    types: [],
    categories: []
}

export const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.BOOK_LIST:
            return { ...state, books: action.payload };
        case actionTypes.BOOK_LIST_SUCCESS:
            return { ...state, books: action.payload };
        case actionTypes.BOOK_LIST_FAILURE:
            return { ...state, books: action.payload };
        case actionTypes.BOOK_DETAIL:
            return { ...state, book: action.payload };
        case actionTypes.BOOK_DETAIL_SUCCESS:
            return { ...state, book: action.payload };
        case actionTypes.BOOK_DETAIL_FAILURE:
            return { ...state, book: action.payload };
        case actionTypes.BOOK_TYPES_LIST:
            return { ...state, types: action.payload };
        case actionTypes.BOOK_TYPES_LIST_SUCCESS:
            return { ...state, types: action.payload };
        case actionTypes.BOOK_TYPES_LIST_FAILURE:
            return { ...state, types: action.payload };
        case actionTypes.BOOK_CATEGORIES:
            return { ...state, categories: action.payload };
        case actionTypes.BOOK_CATEGORIES_SUCCESS:
            return { ...state, categories: action.payload };
        case actionTypes.BOOK_CATEGORIES_FAILURE:
            return { ...state, categories: action.payload };
        default: return state;
    }
}
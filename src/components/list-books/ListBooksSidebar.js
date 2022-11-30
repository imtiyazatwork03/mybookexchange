import React from 'react'
import BookForm from './BookForm'
import { bookDetail, BookSelectedCategories } from '../../store/selectors/book.selector';
import { useSelector } from 'react-redux';

const ListBooksSidebar = ({ id }) => {
    const book = useSelector(bookDetail);
    const books = useSelector(BookSelectedCategories);
    return (
        <section className="mainHmSec">
            <div className="container">
                <div className="row no-gutters" style={{ justifyContent: 'center' }}>
                    <BookForm book={book} id={id} books={books} />
                </div>
            </div>
        </section>
    )
}

export default ListBooksSidebar
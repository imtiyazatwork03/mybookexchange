import React from 'react'
import SidebarDash from './SidebarDash'
import BookForm from './BookForm'
import { bookDetail, BookSelectedCategories } from '../../store/selectors/book.selector';
import { useSelector } from 'react-redux';

const ListBooksSidebar = ({ id }) => {
    const book = useSelector(bookDetail);
    const books = useSelector(BookSelectedCategories);
    return (
        <section className="pb-40 bg-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 pb-50 pt-50">
                        <div className="chat-section ">
                            <div className="row ">
                                <SidebarDash />
                                <BookForm book={book} id={id} books={books}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ListBooksSidebar
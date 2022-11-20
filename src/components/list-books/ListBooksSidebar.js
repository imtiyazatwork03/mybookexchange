import React from 'react'
import SidebarDash from './SidebarDash'
import BookForm from './BookForm'
import { bookDetail } from '../../store/selectors/book.selector';
import { useSelector } from 'react-redux';

const ListBooksSidebar = ({id}) => {
    const book = useSelector(bookDetail);
    return (
        
            <section className="">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 pb-50 pt-50">
                            <div className="chat-section ">
                                <div className="row ">
                                    <SidebarDash />
                                    <BookForm book={book} id={id}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
       
    )
}

export default ListBooksSidebar
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import SidebarDash from '../list-books/SidebarDash'
import { deleteBook } from '../../store/actions/book.action'
import { toast } from 'react-toastify'

const MyListBooks = ({ books }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const removeBook = async (book) => {
        const result = await dispatch(deleteBook(book?.id));
        const { success, reason } = result;
        if (success) toast.success(reason);
        else toast.error(reason);
    }
    const editBook = (book) => {
        navigate(`/list-books/${book.id}`);
    }
    return (
        <div className="wrapper height_my_wrapper">
            <section className="height-100vh wdth100 bg-gry">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 pb-50 pt-50">
                            <div className="chat-section ">
                                <div className="row ">
                                    <SidebarDash />
                                    <aside className="col-md-9 col-lg-9">
                                        <div className="row pb-20">
                                            <div className="col-md-12 card pt-40 pb-30 pl-20 pr-20">
                                                <div className="row">
                                                    <div className="col-md-9">
                                                        <h4 className="mb-15">Your Books Listing</h4>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <Link to="/list-books" className="button float-right">+ Add New Book</Link>
                                                    </div>
                                                    <div className="clearfix"></div>
                                                </div>
                                                <hr className="mt-20 mb-10" />
                                                <div className="card-body">
                                                    <div className="table-responsive">
                                                        <table className="table center-aligned-table">
                                                            <thead>
                                                                <tr className="text-dark">
                                                                    <th>Title</th>
                                                                    <th>Author</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {
                                                                    books.map((prop, key) => {
                                                                        return (<tr key={key}>
                                                                            <td>{prop?.title}</td>
                                                                            <td>{prop?.author}</td>
                                                                            <td>
                                                                                <span className="pr-2" title="Edit" style={{ cursor: 'pointer' }}>
                                                                                    <ion-icon name="create-outline" onClick={() => editBook(prop)}></ion-icon>
                                                                                </span>
                                                                                <span className="pr-2" title="Edit" style={{ cursor: 'pointer' }}>
                                                                                    <ion-icon name="trash-outline" onClick={() => removeBook(prop)}></ion-icon>
                                                                                </span>
                                                                            </td>
                                                                        </tr>)
                                                                    })
                                                                }
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MyListBooks;
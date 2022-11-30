import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { deleteBook } from '../../store/actions/book.action'
import { toast } from 'react-toastify'
import UserTable from "../../components/table/Table";

const MyListBooks = ({ books }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const removeBook = async (book) => {
        const result = await dispatch(deleteBook(book?.original?.id));
        const { success, reason } = result;
        if (success) toast.success(reason);
        else toast.error(reason);
    }
    const editBook = (book) => {
        navigate(`/listbooks/${book?.original?.id}`);
    }
    const columns = [
        {
            Header: 'Title',
            accessor: 'title',
        },
        {
            Header: 'Author',
            accessor: 'author',
        },
        {
            Header: 'Actions',
            accessor: 'actions',
        }
    ];
    return (
        
        <section className="mainHmSec">
            <div className="container">
                <div className="row no-gutters" style={{ justifyContent: 'center' }}>
                    <aside className="col-md-10 col-lg-10">
                        <div className="row pb-20">
                            <div className="col-md-12 card pt-40 pb-30 pl-20 pr-20">
                                <div className="row">
                                    <div className="col-md-9">
                                        <h4 className="mb-15">Your Books Listing</h4>
                                    </div>
                                    <div className="col-md-3">
                                        <Link to="/listbooks" className="button float-right">+ Add New Book</Link>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                <hr className="mt-20 mb-10" />
                                <UserTable columns={columns} data={books} crud={true} editBook={editBook} removeBook={removeBook} />
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    )
}

export default MyListBooks;
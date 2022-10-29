import React from 'react'
import { Link } from 'react-router-dom'
import SidebarDash from '../list-books/SidebarDash'

function MyListBooks() {
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
                                                                    <th>Book Type</th>
                                                                    <th>Category</th>
                                                                    <th>Status</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>Applied Physics</td>
                                                                    <td>Palani Swamy</td>
                                                                    <td>Regular</td>
                                                                    <td>Art</td>
                                                                    <td className="text-success">Active</td>
                                                                    <td>
                                                                        <Link className="pr-2" to="/" title="Edit">
                                                                            <ion-icon name="create-outline"></ion-icon>
                                                                        </Link>
                                                                        <Link className="pr-2" to="/" title="Edit">
                                                                            <ion-icon name="trash-outline"></ion-icon>
                                                                        </Link>
                                                                    </td>
                                                                </tr>
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

export default MyListBooks
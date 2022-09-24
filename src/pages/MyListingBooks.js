import React from 'react'
import SidebarDash from '../components/list-books/SidebarDash'

const MyListingBooks = () => {
    return (
        <div>
            <section className="wdth100 bg-gry">
                <div className=" bg-blue">
                    <div className="container">
                        <ol className="breadcrumb pb-20 pt-20" style={{ backgroundColor: '#0f65b1' }}>
                            <li className="breadcrumb-item"><a href="dashboard.html" className="default-color">Dashboard</a></li>
                            <li className="breadcrumb-item active">List Books</li>
                        </ol>
                    </div>
                </div>


                <div className="container">
                    <div className="row">
                        <div className="col-md-12 pb-50 pt-50">
                            <div className="chat-section ">
                                <div className="row ">
                                <div className="asim">


                                    {/* <!-- left Chat Section start--> */}

                                    <SidebarDash />
                                    <aside className="col-md-9 col-lg-9">
                                        <div className="row pb-20">

                                            {/* <!-- heading Start--> */}
                                            <div className="col-md-12 card pt-40 pb-30 pl-20 pr-20">
                                                <div className="row">
                                                    {/* <!-- ====== --> */}
                                                    <div className="col-md-9">
                                                        <h4 className="mb-15">Your Books Listing</h4>
                                                    </div>
                                                    {/* <!-- ====== --> */}
                                                    <div className="col-md-3"><a href="#" className="button float-right">+ Add New Book</a>
                                                    </div>
                                                    {/* <!-- ====== --> */}
                                                    <div className="clearfix"></div>

                                                </div>

                                                <hr className="mt-20 mb-10"/>
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
                                                                        <td><a className="pr-2" href="#" title="Edit"> <i className="fa fa-edit"></i></a> <a href="#" title="Delete"> <i className="fa fa-trash-o text-danger"></i></a></td>

                                                                    </tr>
                                                                    <tr>

                                                                        <td>Applied Physics</td>
                                                                        <td>Palani Swamy</td>
                                                                        <td>Regular</td>
                                                                        <td>Art</td>
                                                                        <td className="text-danger">Deactive</td>
                                                                        <td><a className="pr-2" href="#" title="Edit"> <i className="fa fa-edit"></i></a> <a href="#" title="Delete"> <i className="fa fa-trash-o text-danger"></i></a></td>

                                                                    </tr>

                                                                    <tr>

                                                                        <td>Applied Physics</td>
                                                                        <td>Palani Swamy</td>
                                                                        <td>Regular</td>
                                                                        <td>Art</td>
                                                                        <td className="text-success">Active</td>
                                                                        <td><a className="pr-2" href="#" title="Edit"> <i className="fa fa-edit"></i></a> <a href="#" title="Delete"> <i className="fa fa-trash-o text-danger"></i></a></td>

                                                                    </tr>
                                                                    <tr>

                                                                        <td>Applied Physics</td>
                                                                        <td>Palani Swamy</td>
                                                                        <td>Regular</td>
                                                                        <td>Art</td>
                                                                        <td className="text-success">Active</td>
                                                                        <td><a className="pr-2" href="#" title="Edit"> <i className="fa fa-edit"></i></a> <a href="#" title="Delete"> <i className="fa fa-trash-o text-danger"></i></a></td>

                                                                    </tr>
                                                                    <tr>

                                                                        <td>Applied Physics</td>
                                                                        <td>Palani Swamy</td>
                                                                        <td>Regular</td>
                                                                        <td>Art</td>
                                                                        <td className="text-success">Active</td>
                                                                        <td><a className="pr-2" href="#" title="Edit"> <i className="fa fa-edit"></i></a> <a href="#" title="Delete"> <i className="fa fa-trash-o text-danger"></i></a></td>

                                                                    </tr>
                                                                    <tr>

                                                                        <td>Applied Physics</td>
                                                                        <td>Palani Swamy</td>
                                                                        <td>Regular</td>
                                                                        <td>Art</td>
                                                                        <td className="text-success">Active</td>
                                                                        <td><a className="pr-2" href="#" title="Edit"> <i className="fa fa-edit"></i></a> <a href="#" title="Delete"> <i className="fa fa-trash-o text-danger"></i></a></td>

                                                                    </tr>

                                                                </tbody>
                                                            </table>

                                                        </div>

                                                    </div>

                                            </div>
                                            {/* <!-- heading End--> */}




                                        </div>



                                    </aside></div></div>
                                {/* <!-- right Chat Section end--> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MyListingBooks
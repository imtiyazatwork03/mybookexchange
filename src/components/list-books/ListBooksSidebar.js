import React from 'react'
import SidebarDash from './SidebarDash'
import BookForm from './BookForm'

const ListBooksSidebar = () => {
    return (
        <div className="wrapper">
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
                                    <SidebarDash />
                                    <BookForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ListBooksSidebar
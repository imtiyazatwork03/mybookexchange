import React from 'react'
import SidebarDash from './SidebarDash'
import BookForm from './BookForm'

const ListBooksSidebar = () => {
    return (
        <div className="wrapper">
            <section className="wdth100 bg-gry">
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
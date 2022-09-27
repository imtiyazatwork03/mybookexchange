import React from 'react'
import { Link } from 'react-router-dom'

const SidebarDash = () => {
    return (
        <aside className="col-md-3 col-lg-3 pb-50">
            <h5 className="bold border-bottom pb-20">Dashboard</h5>
            <div className="card-body p-0">
                <ul className="gttl">
                    <li><Link to="/">Profile</Link></li>
                    <li><Link to="/">Find a Book</Link></li>
                    <li><Link to="/">Manage Book Listing</Link></li>
                    <li><Link to="/">Edit Membership</Link></li>
                    <li><Link to="/">Want to List Book</Link></li>
                    <li><Link to="index.html"> Logout</Link></li>
                </ul>
            </div>
        </aside>
    )
}

export default SidebarDash
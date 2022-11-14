import React from "react";
import { Link } from "react-router-dom";

function SideBar() {
    return (
        <aside className="col-md-3 col-lg-3 pb-50">
            {/* <h5 className="bold border-bottom pb-20"></h5> */}
            <div className="card-body p-0">
                <ul className="gttl">
                    <li>
                        <Link to="/">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/list-books">List Book</Link>
                    </li>
                    <li>
                        <Link to="/my-listing-books">Book Listing</Link>
                    </li>
                    <li>
                        <Link to="/profile">Edit Membership</Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
}

export default SideBar;

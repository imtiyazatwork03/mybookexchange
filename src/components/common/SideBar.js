import React from "react";
import { Link } from "react-router-dom";

function SideBar() {
    return (
        <aside className="col-md-3 col-lg-3 pb-50">
            <div className="card-body p-0">
                <ul className="gttl">
                    <li>
                        <Link to="/">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/listbooks">List Books</Link>
                    </li>
                    <li>
                        <Link to="/managebooks">Manage Books</Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
}

export default SideBar;

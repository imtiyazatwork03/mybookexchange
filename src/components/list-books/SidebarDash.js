import React from "react";
import { Link } from "react-router-dom";

import SideBar from "../common/SideBar";

const SidebarDash = () => {
  return (
    <>
      <SideBar />
    </>
  );
  //   return (
  //     <aside className="col-md-3 col-lg-3 pb-50">
  //       <h5 className="bold border-bottom pb-20">Dashboard</h5>
  //       <div className="card-body p-0">
  //         <ul className="gttl">
            // <li>
            //   <Link to="/profile">Profile</Link>
            // </li>
            // <li>
            //   <Link to="/dashboard">Find a Book</Link>
            // </li>
            // <li>
            //   <Link to="/list-books">Want to List Book</Link>
            // </li>
            // <li>
            //   <Link to="/my-listing-books">Manage Book Listing</Link>
            // </li>
            // <li>
            //   <Link to="/profile/update">Edit Membership</Link>
            // </li>
            // <li>
            //   <Link to="/"> Logout</Link>
            // </li>
  //           {/* this link was wrong */}
  //         </ul>
  //       </div>
  //     </aside>
  //   );
};

export default SidebarDash;

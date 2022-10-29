import React from 'react'
import { Link } from 'react-router-dom'

function ManageBook() {
    return (
      <aside className="col-md-4 item pt-15 pb-15 text-center">
        <div className="card ">
          <div className="card-body pb-30">
            <div className="row">
              <div className="col-md-12">
                <img
                  src="images/seller.png"
                  className="mb-20 mt-20"
                  alt="seller"
                />
                <h5>Manage Book Listing</h5>
                <Link to="/my-listing-books" className="button">
                  {" "}
                  Manage Books List
                </Link>
              </div>
            </div>
          </div>
        </div>
      </aside>
    );
}

export default ManageBook

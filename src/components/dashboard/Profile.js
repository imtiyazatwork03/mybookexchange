import React from "react";
import { Link } from "react-router-dom";

function Profile() {
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
              <h5>Edit Membership</h5>
              <Link to="/profile" className="button">
                Edit Your Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Profile;

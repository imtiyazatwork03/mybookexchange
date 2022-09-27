import React from 'react'
import { Link } from 'react-router-dom'

const SideProfile = () => {
    return (
        <div>
            <header className="admin-header">
                <div className="container">
                    <div className="rightNav">
                        <ul className="nav navbar-nav ml-auto">

                            <li className="nav-item dropdown">
                                <Link className="nav-link nav-pill user-avatar" data-toggle="dropdown" to="#" role="button"
                                    aria-haspopup="true" aria-expanded="false"> <img src="images/manjeet.jpg" alt="avatar" /> </Link>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <div className="dropdown-header">
                                        <div className="media">
                                            <div className="media-body">
                                                <h5 className="mt-0 mb-0">Manjeet Singh</h5> <span>manjeet@gmail.com</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dropdown-divider"></div> <Link className="dropdown-item" to="#"><i
                                        className="text-warning ti-user"></i>Profile</Link>
                                    <div className="dropdown-divider"></div> <Link className="dropdown-item" to="#"><i
                                        className="text-warning ti-user"></i>My Order</Link>
                                    <div className="dropdown-divider"></div> <Link className="dropdown-item" to="#"><i
                                        className="text-warning ti-user"></i>Change Password</Link>
                                    <div className="dropdown-divider"></div> <Link className="dropdown-item" to="#"><i
                                        className="text-danger ti-unlock"></i>Logout</Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default SideProfile
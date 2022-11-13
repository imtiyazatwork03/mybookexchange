import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userProfile } from '../../store/selectors/auth.selector';

const SideProfile = () => {
    const profile = useSelector(userProfile);
    return (
        <div>
            <header className="admin-header">
                <div className="container">
                    <div className="rightNav">
                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item dropdown">
                                <Link className="nav-link nav-pill user-avatar" data-toggle="dropdown" to="#" role="button"
                                    aria-haspopup="true" aria-expanded="false"> <img src="/images/user.ico" alt="avatar" /> </Link>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <div className="dropdown-header">
                                        <div className="media">
                                            <div className="media-body">
                                                <h5 className="mt-0 mb-0">{profile?.name}</h5> <span>{profile?.email}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dropdown-divider"></div> <Link className="dropdown-item" to="/">Profile</Link>
                                    <div className="dropdown-divider"></div> <Link className="dropdown-item" to="/">My Order</Link>
                                    <div className="dropdown-divider"></div> <Link className="dropdown-item" to="/">Logout</Link>
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
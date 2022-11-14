import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userProfile } from '../../store/selectors/auth.selector';
import { userLogout } from '../../store/actions/auth.action';

const SideProfile = () => {
    const dispatch = useDispatch();
    const profile = useSelector(userProfile);
    const logout = async() => {
        await dispatch(userLogout({}));
    }
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
                                    <div className="dropdown-divider"></div> <span className="dropdown-item" style={{cursor: 'pointer'}}>Profile</span>
                                    <div className="dropdown-divider"></div> <span className="dropdown-item" style={{cursor: 'pointer'}}>My Order</span>
                                    <div className="dropdown-divider"></div> <span className="dropdown-item" style={{cursor: 'pointer'}} onClick={logout}>Logout</span>
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
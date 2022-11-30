import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userProfile } from '../../store/selectors/auth.selector';
import { userLogout } from '../../store/actions/auth.action';

const SideProfile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const profile = useSelector(userProfile);
    const logout = async () => {
        await dispatch(userLogout({}));
    }
    const toProfile = () => {
        navigate('/editmembership');
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
                                <div className="dropdown-menu dropdown-menu-right pb-0 mb-0">
                                    <div className="dropdown-header">
                                        <div className="media">
                                            <div className="media-body">
                                                <h5 className="mt-0 mb-0">{profile?.name}</h5> <span>{profile?.email}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dropdown-divider mt-0 mb-0"></div>
                                    <span className="dropdown-item" style={{ cursor: 'pointer', height: '50pX' }} onClick={toProfile}>Edit Membership</span>
                                    <div className="dropdown-divider mt-0 mb-0"></div>
                                    <span className="dropdown-item" style={{ cursor: 'pointer', height: '50pX' }} onClick={logout}>Logout</span>
                                </div>
                            </li>
                            <div className="verticalLine" style={{borderLeft: '2px solid #626262', height: '30px', marginTop: '10px'}}></div>
                            <li className="nav-item dropdown">
                                <Link className="nav-link nav-pill user-avatar" data-toggle="dropdown" to="/mycart" role="button"
                                    aria-haspopup="true" aria-expanded="false"> <ion-icon name="cart-outline" style={{ fontSize: '25px', marginTop: '5px' }}></ion-icon> </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default SideProfile;
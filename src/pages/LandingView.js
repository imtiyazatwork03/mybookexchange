import React from 'react';
import { useSelector } from 'react-redux';
import { userToken, userTokenSignUp } from '../store/selectors/auth.selector';
import Dashboard from './Dashboard';
import Home from './Home';

const LandingView = () => {
    const token = useSelector(userToken);
    const tokenSignUp = useSelector(userTokenSignUp);
    return (
        <>
            {
                token || tokenSignUp ? <Dashboard /> : <Home />
            }
        </>
    )
}

export default LandingView;

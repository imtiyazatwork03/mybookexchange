import React from 'react';
import { useSelector } from 'react-redux';
import { userToken } from '../store/selectors/auth.selector';
import Dashboard from './Dashboard';
import Home from './Home';

const LandingView = () => {
    const token = useSelector(userToken);
    return (
        <>
            {
                token ? <Dashboard /> : <Home />
            }
        </>
    )
}

export default LandingView;

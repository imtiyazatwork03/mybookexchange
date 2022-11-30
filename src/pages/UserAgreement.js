import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { moduleDetailAction } from '../store/actions/module.action';
import { moduleDetailSelector } from '../store/selectors/module.selector';
import { useLocation } from 'react-router-dom';
import Module from "../components/common/Module";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Breadcrumb from "../components/common/Breadcrumb";

const UserAgreement = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const breadcrumbs = [
        { name: 'Dashboard', active: true, route: '/' },
        { name: 'User Agreement', active: true, route: '/useragreement' },
    ]
    const payload = location.pathname?.substring(1);
    useEffect(() => {
        if (payload) dispatch(moduleDetailAction(payload));
    }, [payload, dispatch]);
    const moduleDetailData = useSelector(moduleDetailSelector);
    return (
        <div className="page-container bg-gry">
            <Header showAddInfo={true} />
            <Breadcrumb breadcrumbs={breadcrumbs} />
            <Module mod={moduleDetailData?.data} />
            <Footer />
        </div>
    );
}

export default UserAgreement;

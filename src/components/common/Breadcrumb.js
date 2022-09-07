import React from 'react';
import { Link } from 'react-router-dom';

function Breadcrumb() {
    return (
        <div className="bg-blue">
            <div className="container">
                <ol className="breadcrumb pb-20 pt-20" style={{ backgroundColor: '#0f65b1' }}>
                    <li className="breadcrumb-item">
                        <Link to="/" className="default-color">Home</Link>
                    </li>
                    <li className="breadcrumb-item active">Terms and Conditions</li>
                </ol>
            </div>
        </div>
    )
}

export default Breadcrumb;

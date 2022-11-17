import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ breadcrumbs }) => {
    return (
        <div className="bg-blue">
            <div className="container">
                <ol className="breadcrumb pb-20 pt-20" style={{ backgroundColor: '#0f65b1' }}>
                    {breadcrumbs && breadcrumbs.length && breadcrumbs.map((prop, index) => {
                        return prop.active ?
                            <li key={index} className="breadcrumb-item">
                                <Link to={prop.route} className="default-color">{prop.name}</Link>
                            </li> :
                            <li key={index} className="breadcrumb-item active">{prop.name}</li>
                    })}
                </ol>
            </div>
        </div>
    )
}

export default Breadcrumb;

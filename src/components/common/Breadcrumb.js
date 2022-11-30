import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ breadcrumbs }) => {
    return (
        <div className="topHdr">
            <div className="container">
            {/* #0f65b1; */}
                <ol className="breadcrumb pb-12 pt-12" style={{ backgroundColor: '#000080' }}>
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

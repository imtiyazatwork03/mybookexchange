import React from 'react'

const Module = ({mod}) => {
    return (
        <section className="pt-50 pb-50 bg-white privcyPolicy">
            <div className="container">
                <div className="row pb-50">
                    <div className="col-md-12">
                        <div dangerouslySetInnerHTML={{ __html: mod || "<p>Content is not available.<p>" }} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Module
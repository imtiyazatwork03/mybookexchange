import React from 'react';
import Payment from './Payment';
import BooksTable from './BooksTable';

const CartTable = () => {
    return (
        <section className="height-100vh wdth1024" style={{ background: '#edf2f5' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 pb-50 pt-50">
                        <div className="chat-section ">
                            <div className="row ">
                                <BooksTable />
                                <Payment />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CartTable;

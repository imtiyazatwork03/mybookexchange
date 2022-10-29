import React from 'react';
import Payment from './Payment';
import BooksTable from './BooksTable';

const CartTable = () => {
    return (
        <div>
            <section className="height-100vh wdth1024">
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
        </div>
    );
};

export default CartTable;

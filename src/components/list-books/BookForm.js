import React from 'react'

const BookForm = () => {
    return (
        <aside className="col-md-9 col-lg-9">
            <div className="row pb-20">
                <div className="col-md-12 ">
                </div>
                <div className="col-md-12 card pt-40 pb-30 pl-20 pr-20">
                    <h4>List Your Books
                    </h4>
                    <hr className="mt-20 mb-10" />
                    <div className="card-body">
                        <form className="text-left">
                            <div className="form-row  mb-20">
                                <div className=" col-md-12">
                                    <label htmlFor="inputEmail4">Title</label>
                                    <input type="text" className="form-control" placeholder="Enter Book Tittle" />
                                </div>
                            </div>
                            <div className="form-row mt-20 mb-20">
                                <div className="form-group col-md-6">
                                    <label htmlFor="first-name">Author Name</label>
                                    <input type="text" className="form-control" id="first-name" placeholder="First Name" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="last-name">&nbsp;</label>
                                    <input type="text" className="form-control" id="last-name" placeholder="Last Name" />
                                </div>
                            </div>
                            <div className="form-row mt-20 mb-20">
                                <div className="form-group col-md-4">
                                    <label htmlFor="isbn">ISBN</label>
                                    <input type="text" className="form-control" id="isbn" placeholder="ISBN" />
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="book-condition">Book Condition</label>
                                    <select id="book-condition" className="form-control">
                                        <option>Choose...</option>
                                        <option value="good">Good</option>
                                        <option value="fair">Fair</option>
                                        <option value="poor">Poor</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="quantity">Quantity</label>
                                    <select id="quantity" className="form-control">
                                        <option>1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-row mt-20 mb-20">
                                <div className="form-group col-md-6">
                                    <label htmlFor="BookType">BookType</label>
                                    <select id="BookType" className="form-control">
                                        <option>Choose...</option>
                                        <option value="regularbook">Regular Book</option>
                                        <option value="textbook">Text Book</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="categories">Category</label>
                                    <select id="categories" className="form-control">
                                        <option>Choose...</option>
                                        <option value="67">Architecture</option>
                                        <option value="68">Art</option>
                                        <option value="72">Childrens Books</option>
                                        <option>...</option>
                                    </select>
                                </div>
                            </div>
                            <button type="submit" className="button">List Book Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default BookForm
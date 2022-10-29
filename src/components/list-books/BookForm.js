import React, { useState } from 'react'
import { onKeyPress } from '../../utils/util';
import Select from 'react-select';

const BookForm = () => {
    const [selectedCondition, setSelectedCondition] = useState(null);
    const [selectedBook, setSelectedBook] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const conditions = [
        { id: '1', name: 'Good' },
        { id: '2', name: 'Fair' },
        { id: '3', name: 'Poor' }
    ];
    const books = [
        { id: 1, name: "Regular Book"},
        { id: 2, name: "Text Book"}
    ];
    const categories = [
        { id: 1, name: "Architecture Book"},
        { id: 2, name: "Child Book"}
    ];
    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            color: state.isSelected ? 'white' : 'black',
            padding: 10,
        }),
        control: () => ({
            background: '#f6f7f8',
            display: 'flex',
            height: '48px'
        }),
        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'opacity 300ms';
            return { ...provided, opacity, transition };
        }
    }
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
                                    <label htmlFor="title">Title</label>
                                    <input type="text" name="title" className="form-control" placeholder="Enter Book Tittle" />
                                </div>
                            </div>
                            <div className="form-row mt-20 mb-20">
                                <div className="form-group col-md-6">
                                    <label htmlFor="firstname">Author Name</label>
                                    <input type="text" name="firstname" className="form-control" id="firstname" placeholder="First Name" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="lastname">&nbsp;</label>
                                    <input type="text" name="lastname" className="form-control" id="lastname" placeholder="Last Name" />
                                </div>
                            </div>
                            <div className="form-row mt-20 mb-20">
                                <div className="form-group col-md-4">
                                    <label htmlFor="isbn">ISBN</label>
                                    <input type="text" name="isbn" className="form-control" id="isbn" placeholder="ISBN" />
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="book-condition">Book Condition</label>
                                    <Select
                                        styles={customStyles}
                                        defaultValue={selectedCondition || conditions[0]}
                                        options={conditions}
                                        isSearchable={true}
                                        placeholder="select"
                                        onChange={setSelectedCondition}
                                        getOptionLabel={option => option.name}
                                        getOptionValue={option => option.id}
                                        theme={(theme) => ({
                                            ...theme,
                                            borderRadius: 0,
                                            colors: {
                                                ...theme.colors,
                                                primary: 'black',
                                            },
                                        })}
                                    />
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="quantity">Quantity</label>
                                    <input type="text" name="quantity" onKeyPress={(event) => onKeyPress(event)} className="form-control" id="quantity" placeholder='0' />
                                </div>
                            </div>
                            <div className="form-row mt-20 mb-20">
                                <div className="form-group col-md-6">
                                    <label htmlFor="BookType">BookType</label>
                                    <Select
                                        styles={customStyles}
                                        defaultValue={selectedBook || books[0]}
                                        options={books}
                                        isSearchable={true}
                                        placeholder="select"
                                        onChange={setSelectedBook}
                                        getOptionLabel={option => option.name}
                                        getOptionValue={option => option.id}
                                        theme={(theme) => ({
                                            ...theme,
                                            borderRadius: 0,
                                            colors: {
                                                ...theme.colors,
                                                primary: 'black',
                                            },
                                        })}
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="categories">Category</label>
                                    <Select
                                        styles={customStyles}
                                        defaultValue={selectedCategory || categories[0]}
                                        options={categories}
                                        isSearchable={true}
                                        placeholder="select"
                                        onChange={setSelectedCategory}
                                        getOptionLabel={option => option.name}
                                        getOptionValue={option => option.id}
                                        theme={(theme) => ({
                                            ...theme,
                                            borderRadius: 0,
                                            colors: {
                                                ...theme.colors,
                                                primary: 'black',
                                            },
                                        })}
                                    />
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
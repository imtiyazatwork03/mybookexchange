import React, { useEffect, useState } from 'react'
import { onKeyPress } from '../../utils/util';
import { createBook, getBookCategories, getBookTypes, updateBook } from '../../store/actions/book.action';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { BookCategories, bookTypeList } from '../../store/selectors/book.selector';

const BookForm = ({ book, id }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [selectedCondition, setSelectedCondition] = useState(null);
    const [selectedBook, setSelectedBook] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const conditions = [
        { id: 1, name: 'Good' },
        { id: 2, name: 'Fair' },
        { id: 3, name: 'Poor' }
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
    useEffect(() => {
        dispatch(getBookTypes());
        dispatch(getBookCategories());
        if (book?.id) {
            const { title, author, isbn, quantity, type, book_condition } = book;
            const obj = Object.assign({}, {
                title,
                author,
                isbn,
                quantity,
                type_id: type?.id,
                book_condition
            });
            setSelectedBook(type);
            setSelectedCondition(conditions.find(con => con.id === +book_condition))
            setInput({ ...input, ...obj });
        } else {
            setInput(
                {
                    title: '',
                    author: '',
                    isbn: '',
                    quantity: '',
                    book_condition: conditions[0]?.id,
                    type_id: books[0]?.id,
                    category_id: categories[0]?.id
                }
            )
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [book?.id, book, dispatch]);
    const books = useSelector(bookTypeList);
    const categories = useSelector(BookCategories);
    const [input, setInput] = useState({
        title: '',
        author: '',
        isbn: '',
        quantity: '',
        book_condition: conditions[0]?.id,
        type_id: books[0]?.id,
        category_id: categories[0]?.id
    });
    const [error, setError] = useState({
        title: '',
        author: '',
        isbn: '',
        quantity: '',
        book_condition: conditions[0]?.id,
        type_id: books[0]?.id,
        category_id: categories[0]?.id
    })
    const onInputChange = e => {
        const { name, value } = e.target;
        setInput(prev => ({
            ...prev,
            [name]: value
        }));
        validateInput(e);
    }
    const validateInput = e => {
        let { name, value } = e.target;
        setError(prev => {
            const stateObj = { ...prev, [name]: "" };
            switch (name) {
                case "title":
                    if (!value) stateObj[name] = "Please enter title.";
                    break;
                case "author":
                    if (!value) stateObj[name] = "Please enter first name.";
                    break;
                case "isbn":
                    if (!value) stateObj[name] = "Please enter isbn.";
                    break;
                case "quantity":
                    if (!value) {
                        stateObj[name] = "Please enter quantity.";
                    } else if (+value === 0) stateObj[name] = "Please enter valid quantity.";
                    break;
                default:
                    break;
            }
            return stateObj;
        });
    }
    const changeBookType = (type) => {
        setSelectedBook(type);
        setInput(prev => ({
            ...prev,
            type_id: type.id
        }));
    }
    
    const changeBookCondition = (condition) => {
        setSelectedCondition(condition);
        setInput(prev => ({
            ...prev,
            book_condition: condition.id
        }));
    }

    const changeBookCategory = (category) => {
        setSelectedCategory(category);
        setInput(prev => ({
            ...prev,
            category_id: category.id
        }));
    }

    const formSubmit = async (event) => {
        event.preventDefault();
        const book = id ? await dispatch(updateBook(input, id)) : await dispatch(createBook(input));
        const { success, reason } = book;
        if (success) {
            toast.success(reason);
            navigate('/my-listing-books')
        } else toast.error(reason);
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
                        <form className="text-left" onSubmit={formSubmit}>
                            <div className="form-row  mb-20">
                                <div className=" col-md-12">
                                    <label htmlFor="title">Title</label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={input?.title}
                                        onChange={onInputChange}
                                        onBlur={validateInput}
                                        className="form-control"
                                        placeholder="Enter Book Tittle"
                                        required />
                                    {error.title && <span className='err'>{error.title}</span>}
                                </div>
                            </div>
                            <div className="form-row mt-20 mb-20">
                                <div className="form-group col-md-12">
                                    <label htmlFor="author">Author Name</label>
                                    <input
                                        type="text"
                                        name="author"
                                        value={input?.author}
                                        onChange={onInputChange}
                                        onBlur={validateInput}
                                        className="form-control"
                                        id="author"
                                        placeholder="First Name"
                                        required />
                                    {error.author && <span className='err'>{error.author}</span>}
                                </div>
                            </div>
                            <div className="form-row mt-20 mb-20">
                                <div className="form-group col-md-4">
                                    <label htmlFor="isbn">ISBN</label>
                                    <input
                                        type="text"
                                        name="isbn"
                                        value={input?.isbn}
                                        onChange={onInputChange}
                                        onBlur={validateInput}
                                        className="form-control"
                                        id="isbn"
                                        placeholder="ISBN"
                                        required />
                                    {error.isbn && <span className='err'>{error.isbn}</span>}
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="book-condition">Book Condition</label>
                                    <Select
                                        styles={customStyles}
                                        value={selectedCondition || conditions[0]}
                                        options={conditions}
                                        isSearchable={true}
                                        placeholder="select"
                                        name="book_condition"
                                        onChange={changeBookCondition}
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
                                    <input
                                        type="text"
                                        name="quantity"
                                        value={input?.quantity}
                                        onChange={onInputChange}
                                        onBlur={validateInput}
                                        onKeyPress={(event) => onKeyPress(event)}
                                        className="form-control"
                                        id="quantity"
                                        placeholder='0'
                                        required />
                                    {error.quantity && <span className='err'>{error.quantity}</span>}
                                </div>
                            </div>
                            <div className="form-row mt-20 mb-20">
                                <div className="form-group col-md-6">
                                    <label htmlFor="BookType">BookType</label>
                                    <Select
                                        styles={customStyles}
                                        value={selectedBook || books[0]}
                                        options={books}
                                        isSearchable={true}
                                        placeholder="select"
                                        name="type_id"
                                        onChange={changeBookType}
                                        getOptionLabel={option => option.title}
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
                                        value={selectedCategory || categories[0]}
                                        options={categories}
                                        isSearchable={true}
                                        placeholder="select"
                                        name="category_id"
                                        onChange={changeBookCategory}
                                        getOptionLabel={option => option.title}
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
                            <button type="submit" className="button">{id ? 'Update Book' : 'List Book Now'}</button>
                        </form>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default BookForm
import React, { useState, useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookForm = () => {
    // const { addBook } = useContext(BookContext);
    const { dispatch } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [auther, setAuther] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // addBook(title, auther);
        dispatch({
            type: 'ADD_BOOK', book: {
                title,
                auther
            }
        })
        setTitle('');
        setAuther('');


    }
    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <input className='d-block' type='text' placeholder='book title' value={title} onChange={(e) => setTitle(e.target.value)} required />
                <input className='d-block' type='text' placeholder='book auther' value={auther} onChange={(e) => setAuther(e.target.value)} required />
                <input className='d-block' type='submit' value='add book' />
            </form>
        </div>
    );
}

export default BookForm;

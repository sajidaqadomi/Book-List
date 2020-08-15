import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookDetails = ({ book }) => {
    // const { removeBook } = useContext(BookContext)
    const { dispatch } = useContext(BookContext)
    return (
        // <li className='book-item' onClick={() => removeBook(book.id)} >
        //     <div className='title'>{book.title}</div>
        //     <div className='auther'>{book.auther}</div>
        // </li>
        <li className='book-item' onClick={() => dispatch({ type: 'REMOVE_BOOK', id: book.id })} >
            <div className='title'><h2>{book.title}</h2></div>
            <div className='auther'><h4>{book.auther}</h4></div>
        </li>
    );
}

export default BookDetails;

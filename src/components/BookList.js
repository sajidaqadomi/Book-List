import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import BookDetails from './BookDetails';

const BookList = () => {
    // const { books, addBook, removeBook } = useContext(BookContext);
    const { books, dispatch } = useContext(BookContext);

    return (
        <div className="book-list">
            <div className='container'>
                <ul >
                    {books.length ? (
                        books.map(book => {
                            return (
                                <BookDetails book={book} key={book.id} />
                            )

                        })
                    ) : (<li className='text-center'>no book to read,Hello free time :</li>)}



                </ul>
            </div>

        </div>
    );
}

export default BookList;

import React, { useState, useReducer, createContext, useEffect } from 'react';
import { v1 as uuidv1 } from 'uuid'
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {

    // const [books, setBooks] = useState([
    //     { title: 'name of the wind', auther: 'yani sami', id: 1 },
    //     { title: 'the final empire', auther: 'osaid bani', id: 2 }
    // ])s
    // const addBook = (title, auther) => {
    //     setBooks([...books, { title, auther, id: uuidv1() }])

    // }
    // const removeBook = (id) => {
    //     setBooks(books.filter((book) => book.id !== id))
    // }
    const [books, dispatch] = useReducer(bookReducer, [], () => {
        let storBooks = JSON.parse(localStorage.getItem('books'));
        return storBooks ? (
            storBooks

        ) : ([])
    })


    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books));

    }, [books])
    return (
        // <BookContext.Provider value={{ books, addBook, removeBook }}>
        //     {props.children}
        // </BookContext.Provider>
        <BookContext.Provider value={{ books, dispatch }}>
            {props.children}
        </BookContext.Provider>
    );
}

export default BookContextProvider;

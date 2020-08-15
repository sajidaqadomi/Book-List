import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'

function Navbar() {
    const { books } = useContext(BookContext)
    return (
        <div className='nav-area'>
            <div className='container text-center'>
                <h1>Reading List</h1>
                <h3>Currently you have {books.length} book to get through ...</h3>
            </div>
        </div>
    )
}

export default Navbar

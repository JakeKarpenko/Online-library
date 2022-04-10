import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import Home from './Home'
import Library from './Library'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Axios from 'axios'
import BookDetail from './BookDetail'

function App(){

    const [allBooks, setAllBooks] = useState([])
    
    useEffect(() =>{
        Axios.get("http://localhost:3001/read").then(
            (responce) =>{
                setAllBooks(responce.data)
            }
        )
    })

    return(
        <BrowserRouter>
        <div className='app'>
            <p className='logo-title'>YOUR BOOKS LIBRARY</p>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/library' element={<Library />} />
                {allBooks.map( (book) =>
                    <Route path={'/library/' + book._id} element={<BookDetail id={book._id} name={book.name} cover={book.cover} overview={book.overview} />} />
                )}
            </Routes>
        </div>
        </BrowserRouter>
    )
}

export default App
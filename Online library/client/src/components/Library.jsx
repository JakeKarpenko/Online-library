import React, { useEffect, useState } from "react";
import Book from "./Book";
import Axios from "axios"
import { Button } from "@mui/material";

function Library(){
    const [allBooks, setAllBooks] = useState([]);
    const [isAddBookClicked, setIsAddBookClicked] = useState(false);

    const [newBook, setNewBook] = useState({
        name: String,
        cover:String,
        overview: String
    })

    useEffect(() =>{
        Axios.get("http://localhost:3001/read").then(
            (responce) =>{
                setAllBooks(responce.data)
            }
        )
    })


    const publish = () => {
        Axios.post("http://localhost:3001/insert", {
            name: newBook.name,
            cover: newBook.cover,
            overview: newBook.overview
        })
        Axios.get("http://localhost:3001/read").then(
            (responce) =>{
                setAllBooks(responce.data)
            }
        )
    }

    return(
        <div>
         <div onClick={ () =>{
            setIsAddBookClicked( (prevValue) =>{
                return !prevValue
            })
         } } className="add-book-btn"><Button color="error" variant="outlined">Add book</Button></div> 
          {isAddBookClicked && <div className="add-book">
            <div><label>Book name</label><input onChange={ (event) =>{
                setNewBook( (prevValue) =>{
                    return{
                        name: event.target.value,
                        cover: prevValue.cover,
                        overview: prevValue.overview
                    }
                })
            } } type="text" /></div>
               <div><label>Cover link</label> <input onChange={ (event) =>{
                setNewBook( (prevValue) =>{
                    return{
                        name: prevValue.name,
                        cover: event.target.value,
                        overview: prevValue.overview
                    }
                })
            } } type="text"  /></div>
              <p className="center">Overview</p> <textarea onChange={ (event) =>{
                setNewBook( (prevValue) =>{
                    return{
                        name: prevValue.name,
                        cover: prevValue.cover,
                        overview: event.target.value
                    }
                })
            } } rows={15} cols={38} type="text" />
              <div className="center"><Button onClick={ () =>{
                  publish();
                  setIsAddBookClicked(false)
              } } variant="contained" color="success">Publish</Button></div>
            </div> } 

        <div className="library">        
        {allBooks.map( (book, index) => <Book id={book._id} key={index} name={book.name} cover={book.cover} /> )}
        </div>
        </div>
    )
}

export default Library

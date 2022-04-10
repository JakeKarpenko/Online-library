import React, { useRef, useState } from "react";
import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import Axios from "axios";
import { Link } from "react-router-dom";
import CheckIcon from '@mui/icons-material/Check';

function BookDetail(props){

    const [isEditable, setIsEditable] = useState(false);
    const [changedName, setChangedName] = useState("");
    const [changedOverview, setChangedOverview] = useState("");

    

    const deleteBook = () => {
        Axios.delete("http://localhost:3001/delete/" + props.id)
    }

    const updateBook = () =>{
        Axios.put("http://localhost:3001/update", {
            id:props.id, 
            name: changedName,
            overview: changedOverview
        })
    }

    return(
        <div className="book-detail">
         <div>
             <img className="detail-img" width="400" src={props.cover} />
        </div>
        <div className="detail-content">
           <h1 className={isEditable && "text-edit"}  onInput={(e) => setChangedName(e.currentTarget.textContent)} contentEditable={isEditable && "true"}>{props.name}</h1>
           <p className={isEditable && "text-edit"}  onInput={(e) => setChangedOverview(e.currentTarget.textContent)} contentEditable={isEditable && "true"}>{props.overview}</p>
          <Link className="btn-link btn"  to="/library"> <Button onClick={deleteBook} variant="outlined" startIcon={<DeleteIcon/>}>Delete book</Button></Link>
           <Button onClick={ () => {
                isEditable && updateBook()
               setIsEditable( (prevValue) => {
               return !prevValue
             })
           }  
            } className="btn" variant="contained"> { isEditable ? "Save" : "Change" }</Button>
        </div>
       
        </div>
    )
}

export default BookDetail
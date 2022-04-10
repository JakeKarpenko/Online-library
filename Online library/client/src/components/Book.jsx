import { Axios } from "axios";
import React from "react";
import {Link} from "react-router-dom"

function Book(props){

    return(
            <Link style={{ textDecoration: 'none' }} to={"/library/" + props.id}> <div className="book-item">
                <img src={props.cover} />
                <p className="book-name">{props.name}</p>
            </div>
            </Link>
    )
}

export default Book
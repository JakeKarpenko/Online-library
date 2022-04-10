import React from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {Link} from 'react-router-dom'


function Home(){
    return(
        
        <div className="home">
            <Link to="/library"><p className="home-text">Go to <br/> Library <ArrowForwardIcon fontSize="large" /> </p></Link>
        </div>
       
    )
}
export default Home
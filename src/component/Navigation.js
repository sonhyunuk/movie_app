import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css';

const Navigation = () =>{
    return(
        <div>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
        </div>
    )
}
export default Navigation;
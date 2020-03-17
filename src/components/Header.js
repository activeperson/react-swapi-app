import React from 'react';
import { NavLink } from 'react-router-dom'

let Header = () => {
    return (
        <div className="wrapper-links container">
            <NavLink activeClassName='active' className="nav-link" to='/'>Home</NavLink>
            <NavLink activeClassName='active' className="nav-link" to='/films'>Films</NavLink>
            <NavLink activeClassName='active' className="nav-link" to='/starships'>Starships</NavLink>
        </div>
    );
}

export default Header;
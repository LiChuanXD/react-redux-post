import React from 'react';
import Login from './Login';

const Navbar = () =>{
    return(
        <nav className="row navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <Login />
                    <li className="mr-5">
                        <a href="https://github.com/LiChuanXD/react-redux-post" className="nav-link">GitHub</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
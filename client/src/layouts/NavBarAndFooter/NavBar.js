import React from 'react';
import {Link} from 'react-router-dom'
import SearchBar from './components/SearchBar';

// import { NavLink } from "react-router-dom";


function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body fixed-top" data-bs-theme="dark">
            <div className='container-fluid'>
                <span className='navbar-brand'>Read & Review</span>
                <button className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target="#navbarNavDropdown"
                    aria-controls='navbarNavDropdown'
                    aria-expanded='false'
                    aria-label='Toggle Navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNavDropdown'>
                    <ul className='navbar-nav'>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                        </li>
                    </ul>
                    <SearchBar />
                    <ul className='navbar-nav ms-auto'>
                        <li className='nav-item m-1'>
                            <Link type='button' className='btn btn-outline-light' to="/sign-in">Join Now</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;

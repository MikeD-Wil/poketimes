import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="nav.nav-wrapper.red.darken-3">
            <div className="container">
                <a href="_"
                className="brand-logo">Poke'Times</a>
                <ul className="right">
                <li><Link to="/">Home</Link>Home</li>
                <li><Link to="/about">About</Link>About</li>
                <li><Link to="/contact">Contact</Link>Contact</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;

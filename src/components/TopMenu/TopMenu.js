import React from 'react';
import { NavLink } from 'react-router-dom';
import './TopMenu.css';

function TopMenu() {
    return (
        <>
            <div className="nav-container">
                <ul>
                    <NavLink to="/" exact activeClassName="active-link">
                        <li>
                            Home
                        </li>
                    </NavLink>
                    <NavLink to="/contact" activeClassName="active-link">
                        <li>
                            Contact
                        </li>
                    </NavLink>
                    <NavLink to="/products" activeClassName="active-link">
                        <li>
                            Products
                        </li>
                    </NavLink>
                    <NavLink to="/signup" activeClassName="active-link">
                        <li>
                            Book Now!
                        </li>
                    </NavLink>
                </ul>
            </div>
        </>
    );
}

export default TopMenu;
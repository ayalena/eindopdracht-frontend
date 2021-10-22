import React from 'react';
import { NavLink } from 'react-router-dom';
import './TopMenu.css';


function TopMenu() {
    return (
        <nav>
            <div className="nav-container">
                {/*<h4>Acupuncture By Kim</h4>*/}

                <ul>
                    <NavLink to="/" exact activeClassName="active-link">
                        <li>
                            Home
                        </li>
                    </NavLink>
                    <NavLink to="/about" activeClassName="active-link">
                        <li>
                            About
                        </li>
                    </NavLink>
                    <NavLink to="/contact" activeClassName="active-link">
                        <li>
                            Contact
                        </li>
                    </NavLink>
                    <NavLink to="products" activeClassName="active-link">
                        <li>
                            Products
                        </li>
                    </NavLink>
                    <NavLink to="bookings" activeClassName="active-link">
                        <li>
                            Book Now!
                        </li>
                    </NavLink>
                </ul>
            </div>
        </nav>
    );
}

export default TopMenu;
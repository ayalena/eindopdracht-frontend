import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import './TopMenu.css';
import {AuthContext} from "../../context/AuthContext";

function TopMenu() {
    const { isAuth, logOut } = useContext(AuthContext);

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

                    {!isAuth &&
                    <NavLink to="/signup" activeClassName="active-link">
                        <li>
                            Book Now!
                        </li>
                    </NavLink>
                    }
                    {isAuth &&
                    <NavLink to="/agenda" activeClassName="active-link">
                        <li>
                            Book Now!
                        </li>
                    </NavLink>
                    }

                    {isAuth &&
                    <NavLink to="/userprofilepage" activeClassName="active-link">
                        <li>
                            Profile
                        </li>
                    </NavLink>
                    }

                    {isAuth &&
                    <NavLink to="/" activeClassName="active-link" onClick={logOut}>
                        <li>
                            Log Out
                        </li>
                    </NavLink>
                    }

                </ul>
            </div>
        </>
    );
}

export default TopMenu;
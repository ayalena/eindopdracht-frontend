import React, { } from "react";
import './Booking.css';

function Booking({ name, cost, description, icon, title }) {

    return (
        <>
            <div className="product">
                <img src={icon} alt={title}/>
                <h3>
                    {name}
                </h3>
                <p>
                    {cost}
                </p>
                <p>
                    {description}
                </p>
            </div>
        </>
    )
}

export default Booking;
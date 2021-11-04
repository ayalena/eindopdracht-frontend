import React, {useEffect, useState} from "react";
import './TimeSlot.css';
import axios from "axios";


function TimeSlot({day, date, time}) {

    return (
        <>
            <div className="timeslot-container">
                <h3>
                    {day}
                </h3>
                <p>
                    {date}
                </p>
                <p>
                    {time}
                </p>
            </div>
        </>
    );
}

export default TimeSlot;
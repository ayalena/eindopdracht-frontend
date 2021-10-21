import React from "react";
import './TimeSlot.css';


function TimeSlot({day, date, time}) {

    return (
        <>
            <div className="timeslot">
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
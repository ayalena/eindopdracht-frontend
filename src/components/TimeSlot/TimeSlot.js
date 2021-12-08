import React from "react";
import './TimeSlot.css';


function TimeSlot({day, date, time, register}) {

    return (
        <>
            <div className="timeslot-container">
                <label htmlFor={date}>
                <input
                    type="radio"
                    id={date}
                    value={date + time}
                    {...register("timeslot")}
                />
                <h3>
                    {day}
                </h3>
                <p>
                    {date}
                </p>
                <p>
                    {time}
                </p>
                </label>
            </div>
        </>
    );
}

export default TimeSlot;
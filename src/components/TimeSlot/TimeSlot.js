import React, {useEffect, useState} from "react";
import './TimeSlot.css';
import axios from "axios";
import {useForm} from "react-hook-form";


function TimeSlot({day, date, time, register}) {
    // const {register, handleSubmit, formState: {errors}, watch} = useForm();

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
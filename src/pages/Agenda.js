import React from "react";
import PageHeader from "../components/PageHeader";
import logo from "../assets/logo.png";
import TimeSlot from "../components/TimeSlot";
import {useHistory} from "react-router-dom";
import './Agenda.css';

function Agenda() {
    const history = useHistory();

    function handleClick() {
        history.push("/intake-form")
    }

    return (
        <>
            <PageHeader icon={logo} title="Agenda"/>
            <main>


                {/*Button should trigger so that the current date is adjusted to that of the last week, as well as the time slots. If the date is set on the current week, this button should be disabled/invisible*/}
                <button type="button">
                    Last week
                </button>

                <TimeSlot
                    icon={logo}
                    day="Monday"
                    date="Current date: "
                    time="Available timeslots: "

                />
                <TimeSlot
                    icon={logo}
                    day="Tuesday"
                    date="Current date: "
                    time="Available timeslots: "
                />
                <TimeSlot
                    icon={logo}
                    day="Wednesday"
                    date="Current date: "
                    time="Available timeslots: "
                />
                <TimeSlot
                    icon={logo}
                    day="Thursday"
                    date="Current date: "
                    time="Available timeslots: "

                />
                <TimeSlot
                    icon={logo}
                    day="Friday"
                    date="Current date: "
                    time="Available timeslots: "
                />
                <TimeSlot
                    icon={logo}
                    day="Saturday"
                    date="Current date: "
                    time="Available timeslots: "
                />
                <TimeSlot
                    icon={logo}
                    day="Sunday"
                    date="Current date: "
                    time="Available timeslots: "
                />

                {/*Button should trigger so that the current date is adjusted to that of the next week, as well as the time slots*/}
                <button type="button">
                    Next week
                </button>
            </main>

            <button
                type="button"
                onClick={handleClick}
            >
                Continue
            </button>
        </>
    );
}

export default Agenda;
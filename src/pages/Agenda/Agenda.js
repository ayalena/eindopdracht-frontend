import React, {useEffect, useState} from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import logo from "../../assets/logo.png";
import TimeSlot from "../../components/TimeSlot/TimeSlot";
import {useHistory} from "react-router-dom";
import './Agenda.css';

function Agenda() {
    const history = useHistory();

    function handleClick() {
        history.push("/intake-form")
    }

    const [week, setWeek] = useState([]);
    const [offsetNumber, setOffsetNumber] = useState(0);

    useEffect(() => {
        async function fetchWeek() {
            try {
                //method to get days of the week
                // console.log(result.data);
                setWeek();
            } catch (e) {
                console.error(e);
            }
        }
        fetchWeek();
    }, []);

    function handleNextWeek() {
        setOffsetNumber(offsetNumber + 7);
    }

    function handleLastWeek() {
        // console.log("current", offsetNumber);
        if (offsetNumber >= 7) {
            setOffsetNumber(offsetNumber - 7);
        } else {
            setOffsetNumber(0);
        }
    }

    useEffect(() => {
        async function fetchNextWeek() {
            try {
                //method to get data of next week
                // console.log(result.data.results);
                setWeek();
            } catch (e) {
                console.error(e);
            }
        }

        if (offsetNumber !== null && offsetNumber !== undefined) {
            fetchNextWeek();
        }
    }, [offsetNumber]);

    return (
        <>
            <PageHeader icon={logo} title="Agenda"/>
            <main>


                {/*Button should trigger so that the current date is adjusted to that of the last week, as well as the time slots. If the date is set on the current week, this button should be disabled/invisible*/}
                <button
                    type="button"
                    onClick={handleLastWeek}
                    disabled={offsetNumber === 0}
                >
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
                <button
                    type="button"
                    onClick={handleNextWeek}
                >
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
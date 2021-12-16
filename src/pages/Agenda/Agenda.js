import React, {useContext, useEffect, useState} from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import logo from "../../assets/logo.png";
import TimeSlot from "../../components/TimeSlot/TimeSlot";
import {useHistory} from "react-router-dom";
import './Agenda.css';
import axios from "axios";
import {useForm} from "react-hook-form";
import {AuthContext} from "../../context/AuthContext";

function Agenda() {
    const {register, handleSubmit, formState: {errors}, watch} = useForm();
    const [appointments, setAppointments] = useState([]);
    const history = useHistory();
    const {isAuth} = useContext(AuthContext);



    function onFormSubmit(data) {
        console.log(data);
        history.push("/thanks");
    }

    useEffect(() => {
        async function fetchAppointments() {
            try {
                const result = await axios.get(`http://localhost:8080/agenda`);
                console.log(result.data);
                setAppointments(result.data);
            } catch (e) {
                console.error(e);
            }
        }

        fetchAppointments();
    }, []);

    console.log(appointments)

    return (
        <>
            <PageHeader icon={logo} title="Agenda"/>
            <main>

                <form onSubmit={handleSubmit(onFormSubmit)}>
                    <div className="appointment-container">

                        <label htmlFor="appointment">Select a date and time:</label>

                        {appointments.map((appointment) => {
                            return <TimeSlot
                                key={appointment.id}
                                register={register}
                                day="slot"
                                date={appointment.dateOfAppointment}
                                time={appointment.timeOfAppointment}
                            />;
                        })
                        }

                    </div>

                    <button
                        type="submit"
                    >
                        Continue
                    </button>

                </form>
            </main>
        </>
    );
}

export default Agenda;
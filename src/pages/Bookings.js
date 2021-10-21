import React from 'react';
import PageHeader from '../components/PageHeader';
import Booking from "../components/Booking";
import logo from '../assets/logo.png';
import {useHistory} from "react-router-dom";
import './Bookings.css';


function BookingPage() {
    const history = useHistory();

    function handleClick() {
        history.push("/agenda")
    }

    return (
        <div className="page-container">
            <PageHeader
                icon={logo}
                title="Treatments" />
            <main>
                <Booking
                    icon={logo}
                    name="Acupuncture"
                    cost="10$"
                    description="This treatment consists of...."
                />
                <Booking
                    icon={logo}
                    name="Cupping"
                    cost="10$"
                    description="This treatment consists of...."
                />
                <Booking
                    icon={logo}
                    name="Combi Deal"
                    cost="10$"
                    description="This treatment consists of...."
                />

            </main>

            <button
                type="button"
                onClick={handleClick}
            >
                Book!
            </button>

            <p>
                {/*Leer <Link to="/gaatjes">hier</Link> meer over gaatjes*/}
            </p>
        </div>
    );
}

export default BookingPage;
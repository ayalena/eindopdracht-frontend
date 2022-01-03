import React, {useContext} from "react";
import './Thanks.css';
import logo from "../../assets/logo.png";
import PageHeader from "../../components/PageHeader/PageHeader";
import {Link} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";

function ThanksPage() {
    const {logOut} = useContext(AuthContext);

    return (
        <>
            <PageHeader icon={logo} title="Thanks!"/>
            <p>Thank you for booking with us! You will receive a confirmation e-mail with all the necessary info.
            See you soon!</p>
            <p>You can log out <Link to="/" onClick={logOut} >here</Link></p>
        </>
    );
}

export default ThanksPage;
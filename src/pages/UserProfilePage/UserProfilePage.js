import React, {useContext} from "react";
import './UserProfilePage.css';
import {Link, useHistory} from "react-router-dom";
import logo from "../../assets/logo-with-name.png";
import PageHeader from "../../components/PageHeader/PageHeader";
import Footer from "../../components/Footer/Footer";
import UserDetails from "../../components/UserDetails/UserDetails";
import {AuthContext} from "../../context/AuthContext";


function UserProfilePage() {
    const history = useHistory()
    const {user} = useContext(AuthContext)


    function handleClick() {
        history.push("/intake-form")
    }

    return (
        <>
            <PageHeader icon={logo} title="Profile Page"/>

            <div className="profile-container">
                <section>
                    <h2>Info</h2>
                    <p><strong>Username: </strong> {} </p>
                    <p><strong>Email:</strong> {}</p>
                </section>

                <button
                    className="update-button"
                    type="button"
                    onClick={() => handleClick()}
                >Update info
                </button>

                <p>To make an appointment, click <Link to="/agenda"> here </Link></p>


            </div>
            <Footer/>
        </>
    );
}

export default UserProfilePage;
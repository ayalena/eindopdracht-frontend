import React from "react";
import './UserProfilePage.css';
import {Link} from "react-router-dom";
import logo from "../../assets/logo-with-name.png";
import PageHeader from "../../components/PageHeader/PageHeader";
import Footer from "../../components/Footer/Footer";

function UserProfilePage() {

    return (
        <>
            <PageHeader icon={logo} title="Profile Page"/>

            <div className="profile-container">
                <section>
                    <h2>Information</h2>
                    <p><strong>Username:</strong> {} </p>
                    <p><strong>Email:</strong> hardcoded@test.com</p>
                </section>

                <section>
                    <h2>Profile content</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga
                        id
                        molestias qui quo unde?</p>
                </section>
                <p>Back to <Link to="/">HomePage</Link></p>
            </div>
            <Footer/>
        </>
    );
}

export default UserProfilePage;
import React from "react";
import './UserDetails.css';

function UserDetails({ userEmail, userFirstName, userLastName, userAge, userGender, userAddress, userPostalCode, userCountry, userPhoneNumber }) {

    return (
        <>
            <div className="userdetails-container">
                <section className="userdetails-info">

                    <p>
                        <label>E-mail:</label>
                        <label>{userEmail}</label>
                    </p>
                    <p>
                        <label>First Name:</label>
                        <label>{userFirstName}</label>
                    </p>
                    <p>
                        <label>Last Name:</label>
                        <label>{userLastName}</label>
                    </p>
                    <p>
                        <label>Age:</label>
                        <label>{userAge}</label>
                    </p>
                    <p>
                        <label>Gender:</label>
                        <label>{userGender}</label>
                    </p>
                    <p>
                        <label>Address:</label>
                        <label>{userAddress}</label>
                    </p>
                    <p>
                        <label>Postal Code:</label>
                        <label>{userPostalCode}</label>
                    </p>
                    <p>
                        <label>Country:</label>
                        <label>{userCountry}</label>
                    </p>
                    <p>
                        <label>Phone Number:</label>
                        <label>{userPhoneNumber}</label>
                    </p>

                </section>
            </div>
        </>
    );
}

export default UserDetails;
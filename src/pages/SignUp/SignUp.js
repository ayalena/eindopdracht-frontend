import React, {useContext, useState} from "react";
import './SignUp.css';
import {Link, useHistory} from "react-router-dom";
import axios from "axios";


function SignUpPage() {
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [usernameValue, setUsernameValue] = useState('');
    const history = useHistory();


    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const result = await axios.post('http://localhost:3000/register', {
                email: emailValue,
                user: usernameValue,
                password: passwordValue,
            })
            console.log(result.data);
            history.push("/signin")
        } catch (e) {
            console.error(e);
        }
    }


    return (
        <>
            <div className="form-container">

                <h1>Register</h1>
                <p>To book an appointment, please register!</p>

                <form onSubmit={handleSubmit}>

                    <div>
                        <label htmlFor="email"> E-mail: </label>
                        <input
                            type="text"
                            placeholder=""
                            name="email"
                            value={emailValue}
                            onChange={(e) => setEmailValue(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="password"> Password: </label>
                        <input
                            type="text"
                            placeholder=""
                            name="password"
                            value={passwordValue}
                            onChange={(e) => setPasswordValue(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="username"> Username: </label>
                        <input
                            type="text"
                            placeholder=""
                            name="username"
                            value={usernameValue}
                            onChange={(e) => setUsernameValue(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                    >
                        Register
                    </button>

                </form>
                <p>If you already have an account, you can log in <Link to="/signin">here</Link></p>
            </div>

        </>
    );
}

export default SignUpPage;
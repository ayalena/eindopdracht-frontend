import React, {useContext, useState} from "react";
import './SignIn.css';
import {AuthContext} from "../../context/AuthContext";
import {Link, useHistory} from "react-router-dom";
import axios from "axios";

function SignInPage() {
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const {logIn} = useContext(AuthContext);
    const history = useHistory();


    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const result = await axios.post('http://localhost:3000/login', {
                email: emailValue,
                password: passwordValue,
            })
            console.log(result.data);
            logIn(result.data.accessToken);
            history.push("/agenda");
        } catch (e) {
            console.error(e);
        }
    }


    return (
        <>
            <h1>Log in</h1>
            <p>Please fill in your details below</p>

            <div className="form-container">
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
                        <label htmlFor="password"> Wachtwoord: </label>
                        <input
                            type="text"
                            placeholder=""
                            name="password"
                            value={passwordValue}
                            onChange={(e) => setPasswordValue(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                    >
                        Log in
                    </button>
                </form>
            </div>

            <p>If you don't have an account yet, you can register <Link to="/signup">here</Link></p>
        </>
    );
}

export default SignInPage;
import React, {useContext, useState} from "react";
import './SignIn.css';
import {AuthContext} from "../../context/AuthContext";
import {Link, useHistory} from "react-router-dom";
import axios from "axios";
import PageHeader from "../../components/PageHeader/PageHeader";
import logo from "../../assets/logo-with-name.png";
import Footer from "../../components/Footer/Footer";

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
            <PageHeader icon={logo} title="Login"/>
            <form onSubmit={handleSubmit}>
                <div className="form-container">


                    <p>Please fill in your details below</p>


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
                        className="login-button"
                    >
                        Log in
                    </button>


                    <p>If you don't have an account yet, you can register <Link to="/signup">here</Link></p>
                </div>
            </form>
            <Footer/>
        </>
    );
}

export default SignInPage;
import React, {useEffect, useState} from "react";
import './SignUp.css';
import {Link, useHistory} from "react-router-dom";
import axios from "axios";
import PageHeader from "../../components/PageHeader/PageHeader";
import logo from "../../assets/logo-with-name.png"
import Footer from "../../components/Footer/Footer";

import {useForm} from "react-hook-form";
import InputField from "../../components/InputField/InputField";


function SignUpPage() {
    // const {register, handleSubmit, formState: {errors, isDirty, isValid}} = useForm({mode: 'onChange'});


    // state for form
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [usernameValue, setUsernameValue] = useState('');

    //state for functionality
    const history = useHistory();
    const [error, toggleError] = useState(false)
    const [loading, toggleLoading] = useState(false);
    // const [error, setError] = useState(false)

    //cancel token for network request
    const source = axios.CancelToken.source();

    // if page gets unmounted, abort request
    useEffect(() => {
        return function cleanup() {
            source.cancel();
        }
    }, []);

    //custom server
    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);
        toggleLoading(true);
        try {
            const result = await axios.post("http://localhost:8080/api/auth/signup", {
                email: emailValue,
                username: usernameValue,
                password: passwordValue,
            }, {
                cancelToken: source.token,
            })
            console.log(result)
            history.push("/signin")
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
        toggleLoading(false);
    }


    //fake server
    // async function handleSubmit(e) {
    //     e.preventDefault();
    //     toggleError(false);
    //     toggleLoading(true);
    //
    //     try {
    //         const result = await axios.post('http://localhost:3000/register', {
    //             email: emailValue,
    //             user: usernameValue,
    //             password: passwordValue,
    //         }, {
    //             cancelToken: source.token,
    //         })
    //
    //         console.log(result.data);
    //         history.push("/signin")
    //     } catch (e) {
    //         console.error(e);
    //         toggleError(true);
    //     }
    //     toggleLoading(false);
    // }

    return (
        <>
            <PageHeader icon={logo} title="Register"/>
            <form onSubmit={handleSubmit}>
                <label htmlFor="signUp">
                    <div className="form-container">

                        <p>To book an appointment, please register!</p>

                        {/*<div>*/}
                        {/*    E-mail:*/}
                        {/*    <input*/}
                        {/*        type="text"*/}
                        {/*        id="email"*/}
                        {/*        {...register("email", {*/}
                        {/*            required: {*/}
                        {/*                value: true,*/}
                        {/*                message: "Please fill in your email"*/}
                        {/*            },*/}
                        {/*        })}*/}
                        {/*    />*/}
                        {/*    {errors.email && <p>{errors.email.message}</p>}*/}
                        {/*</div>*/}

                        {/*<div>*/}
                        {/*    Password:*/}
                        {/*    <input*/}
                        {/*        type="text"*/}
                        {/*        id="password"*/}
                        {/*        {...register("password", {*/}
                        {/*            required: {*/}
                        {/*                value: true,*/}
                        {/*                message: "Please fill in your password"*/}
                        {/*            },*/}
                        {/*        })}*/}
                        {/*    />*/}
                        {/*    {errors.password && <p>{errors.password.message}</p>}*/}
                        {/*</div>*/}

                        {/*<div>*/}
                        {/*    Username:*/}
                        {/*    <input*/}
                        {/*        type="text"*/}
                        {/*        id="username"*/}
                        {/*        {...register("username", {*/}
                        {/*            required: {*/}
                        {/*                value: true,*/}
                        {/*                message: "Please fill in your username"*/}
                        {/*            },*/}
                        {/*        })}*/}
                        {/*    />*/}
                        {/*    {errors.username && <p>{errors.username.message}</p>}*/}
                        {/*</div>*/}

                        {/*<div>*/}
                        {/*    E-mail:*/}
                        {/*    <InputField*/}
                        {/*        type="text"*/}
                        {/*        id="email"*/}
                        {/*        placeholder=""*/}
                        {/*        register={register}*/}
                        {/*        registerName="email"*/}
                        {/*        errors={errors}*/}
                        {/*        required="Please enter a valid email address"*/}
                        {/*        minLength={2}*/}
                        {/*        minLengthMessage="Email has to be at least 2 characters"*/}
                        {/*        maxLength={25}*/}
                        {/*        maxLengthMessage="Please shorten email to max 25 characters"*/}
                        {/*    />*/}
                        {/*</div>*/}

                        {/*<div>*/}
                        {/*    Password:*/}
                        {/*    <InputField*/}
                        {/*        type="text"*/}
                        {/*        id="password"*/}
                        {/*        placeholder=""*/}
                        {/*        register={register}*/}
                        {/*        registerName="password"*/}
                        {/*        errors={errors}*/}
                        {/*        required="Please enter a password"*/}
                        {/*        minLength={6}*/}
                        {/*        minLengthMessage="Password has to be at least 6 characters"*/}
                        {/*        maxLength={25}*/}
                        {/*        maxLengthMessage="Please shorten password to max 25 characters"*/}
                        {/*    />*/}
                        {/*</div>*/}

                        {/*<div>*/}
                        {/*    Username:*/}
                        {/*    <InputField*/}
                        {/*        type="text"*/}
                        {/*        id="username"*/}
                        {/*        placeholder=""*/}
                        {/*        register={register}*/}
                        {/*        registerName="username"*/}
                        {/*        errors={errors}*/}
                        {/*        required="Please enter a username"*/}
                        {/*        minLength={2}*/}
                        {/*        minLengthMessage="Username has to be at least 6 characters"*/}
                        {/*        maxLength={25}*/}
                        {/*        maxLengthMessage="Please shorten username to max 25 characters"*/}
                        {/*    />*/}
                        {/*</div>*/}

                        <div>
                            <label htmlFor="email"> E-mail: </label>
                            <input
                                type="text"
                                placeholder=""
                                name="email"
                                value={emailValue}
                                onChange={(e) => setEmailValue(e.target.value)}
                            />
                            {error && <p className="error"> This email is already in use.</p>}
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
                            {error && <p className="error"> This username is already in use.</p>}

                        </div>

                        <button
                            type="submit"
                            className="register-button"
                            disabled={loading}
                        >
                            Register
                        </button>
                        {error && <p className="error">Username or e-mail already in use</p>}
                        <p>If you already have an account, you can log in <Link to="/signin">here</Link></p>

                    </div>
                </label>
            </form>
            <Footer/>
        </>
    );
}

export default SignUpPage;


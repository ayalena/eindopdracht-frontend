import React, {useState} from "react";
import './SignUp.css';
import {Link, useHistory} from "react-router-dom";
import axios from "axios";
import PageHeader from "../../components/PageHeader/PageHeader";
import logo from "../../assets/logo-with-name.png"
import Footer from "../../components/Footer/Footer";
// import {useForm} from "react-hook-form";


function SignUpPage() {
    // const {register, handleSubmit, formState: {errors}} = useForm({mode: 'onChange'});


    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [usernameValue, setUsernameValue] = useState('');
    const history = useHistory();

    // const [error, setError] = useState(false)

    // async function handleFormSubmit(data) {
    //     // data.preventDefault();
    //     setError(false)
    //     try {
    //         const result = await axios.post('ttp://localhost:8080/api/auth/signup', {
    //             email: data.email,
    //             user: data.user,
    //             password: data.password,
    //         })
    //         console.log(result);
    //         history.push("/signin")
    //     } catch (e) {
    //         if (e) {
    //             setError(true)
    //         }
    //         console.error(e)
    //     }
    // }

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
            <PageHeader icon={logo} title="Register"/>
            <form onSubmit={handleSubmit}>
                <div className="form-container">


                    <p>To book an appointment, please register!</p>


                    {/*<div>*/}
                    {/*    <label htmlFor="email"> E-mail: </label>*/}
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
                    {/*    <label htmlFor="password"> Password: </label>*/}
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
                    {/*    <label htmlFor="username"> Username: </label>*/}
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
                        className="register-button"
                    >
                        Register
                    </button>


                    <p>If you already have an account, you can log in <Link to="/signin">here</Link></p>
                </div>
            </form>
            <Footer/>
        </>
    );
}

export default SignUpPage;
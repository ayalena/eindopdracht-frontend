import React from "react";
import {useForm} from 'react-hook-form'
import PageHeader from "../../components/PageHeader/PageHeader";
import logo from "../../assets/logo-with-name.png";
import './Contact.css';
import Footer from "../../components/Footer/Footer";
import FileUpload from "../../components/FileUpload/FileUpload";


function ContactPage() {
    const {register, handleSubmit, formState: {errors}, /*watch*/} = useForm();

    function onFormSubmit(data) {
        //POST METHODE NAAR BACKEND
        console.log(data);
    }

    return (
        <>
            <PageHeader icon={logo} title="Contact Form"/>
            <form onSubmit={handleSubmit(onFormSubmit)}>

                <div className="form-container">

                    <div>
                        <label htmlFor="first-name"> First Name </label>
                        <input
                            type="text"
                            id="first-name"
                            {...register("firstName", {
                                required: {
                                    value: true,
                                    message: "First name is required",
                                },
                                minLength: {
                                    value: 3,
                                    message: "Fist name has to be at least 3 characters long",
                                },
                            })}
                        />
                        {errors.firstName && <p>{errors.firstName.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="last-name"> Last Name </label>
                        <input
                            type="text"
                            id="last-name"
                            {...register("lastName", {
                                required: {
                                    value: true,
                                    message: "Last name is required"
                                },
                            })}
                        />
                        {errors.lastName && <p>{errors.lastName.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="email"> E-mail </label>
                        <input
                            type="text"
                            id="email"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: "Email is required"
                                },
                            })}
                        />
                        {errors.age && <p>{errors.email.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="message"> Message </label>
                        <textarea
                            id="message"
                            cols="30"
                            rows="10"
                            {...register(..."message")}
                        >
                        </textarea>
                    </div>

                    {/*<div>*/}
                    {/*    <label htmlFor="file"> Add a file</label>*/}
                    {/*    <FileUpload*/}
                    {/*        {...register(..."file")}*/}
                    {/*    />*/}
                    {/*</div>*/}

                    <div id="checkbox">
                        <input
                            type="checkbox"
                            id="terms-and-conditions"
                            {...register("terms-and-conditions")}
                        />
                        I agree with the terms and conditions
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="round-button"
                        >
                            Send!
                        </button>
                    </div>

                </div>
            </form>
            <Footer/>
        </>
    );
}

export default ContactPage;
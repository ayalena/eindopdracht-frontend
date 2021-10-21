import React from "react";
import { useForm } from 'react-hook-form'
import PageHeader from "../components/PageHeader";
import logo from "../assets/logo.png";
import './Contact.css';


function ContactPage() {
    const {register, handleSubmit, formState: {errors}, watch} = useForm();

    function onFormSubmit(data) {
        console.log(data);
    }

    return (
        <>
            <main>
                <form onSubmit={handleSubmit(onFormSubmit)}>
                    <div className="form-container">

                        <PageHeader icon={logo} title="Contact Form"/>
                            <div>
                                <label htmlFor="first-name"> First Name </label>
                                <input
                                    type="text"
                                    id="first-name"
                                    {...register("firstName", {
                                        required: {
                                            value: true,
                                            message: "Naam is verplicht",
                                        },
                                        minLength: {
                                            value: 3,
                                            message: "Naam moet minimaal drie karakters bevatten",
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
                                            message: "Achternaam is verplicht"
                                        },
                                    })}
                                />
                                {errors.lastName && <p>{errors.lastName.message}</p>}
                            </div>

                            <div>
                                <label htmlFor="age"> E-mail </label>
                                <input
                                    type="text"
                                    id="email"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: "Leeftijd is verplicht"
                                        },
                                        min: {
                                            value: 18,
                                            message: "Je moet minimaal 18 jaar zijn",
                                        },
                                    })}
                                />
                                {errors.age && <p>{errors.age.message}</p>}
                            </div>

                            <div>
                                <label htmlFor="message"> Opmerkingen </label>
                                <textarea
                                    id="message"
                                    cols="30"
                                    rows="10"
                                    {...register(..."message")}
                                >

                                </textarea>
                            </div>

                            <div id="checkbox">
                                <input
                                    type="checkbox"
                                    id="terms-and-conditions"
                                    {...register("terms-and-conditions")}
                                />
                                Ik ga akkoord met de voorwaarden
                            </div>

                            <div>
                                <button
                                    type="submit"
                                >
                                    Verstuur
                                </button>
                            </div>

                    </div>
                </form>
            </main>
        </>
    );
}

export default ContactPage;
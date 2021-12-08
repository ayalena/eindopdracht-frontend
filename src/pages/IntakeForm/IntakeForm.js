import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import logo from "../../assets/logo.png";
import {useForm} from "react-hook-form";
import './IntakeForm.css';


function IntakeForm() {
    const {register, handleSubmit, formState: {errors}, watch} = useForm();


    function onFormSubmit(data) {
        //POST METHODE NAAR BACKEND
        console.log(data);
    }

    const genderChoice = watch('gender');


    return (
        <>
            <main>
                <form onSubmit={handleSubmit(onFormSubmit)}>
                    <div className="form-container">

                        <PageHeader icon={logo} title="Intake Form"/>

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
                            <label htmlFor="date-of-birth"> Leeftijd </label>
                            <input
                                type="number"
                                id="date-of-birth"
                                {...register("date-of-birth", {
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

                        <div id="gender">
                            <label htmlFor="gender"> Gender </label>
                            <select
                                id="gender"
                                {...register("gender", {
                                    required: true,
                                })}
                            >
                                <option value="female"> Female</option>
                                <option value="male">Male</option>
                                <option value="non-binary">Non Binary</option>
                                <option value="other"> Other: ...</option>
                            </select>
                            {genderChoice === "other" &&
                            <input
                                type="text"
                                id="genderChoiceOther"
                                {...register("genderChoiceOther")}
                            />
                            }
                        </div>

                        <div>
                            <label htmlFor="address"> Address </label>
                            <input
                                type="text"
                                id="address"
                                {...register("address", {
                                    required: {
                                        value: true,
                                        message: "Achternaam is verplicht"
                                    },
                                })}
                            />
                            {errors.lastName && <p>{errors.lastName.message}</p>}
                        </div>

                        <div>
                            <label htmlFor="postal-code"> Postcode </label>
                            <input
                                type="text"
                                id="postal-code"
                                {...register("postalCode", {
                                    required: {
                                        value: true,
                                        message: "Postcode is verplicht"
                                    },
                                    pattern: {
                                        value: /^(?:NL-)?(\d{4})\s*([A-Z]{2})$/i,
                                        message: "Geef een geldige postcode op",
                                    },
                                })}
                            />
                            {errors.postalCode && <p>{errors.postalCode.message}</p>}
                        </div>

                        <div>
                            <label htmlFor="phone-number"> Phone number </label>
                            <input
                                type="number"
                                id="phone-number"
                                {...register("phone-number", {
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
                            <label htmlFor="message"> What is the main reason you are visiting? </label>
                            <textarea
                                id="message"
                                cols="30"
                                rows="10"
                                {...register(..."message")}
                            >

                                </textarea>
                        </div>

                        {/*dit miss beter als multiple choice?*/}
                        <div id="radio">
                            <label htmlFor="session"> Which session are you booking? </label>
                            <input
                                type="radio"
                                id="acupuncture-session"
                                {...register("acupuncture-session")}
                            />
                            <label htmlFor="acupuncture-session"> Acupuncture session </label>
                            <input
                                type="radio"
                                id="facial-acupuncture-session"
                                {...register("facial-acupuncture-session")}
                            />
                            <label htmlFor="nighttime"> Facial acupuncture session </label>
                            <input
                                type="radio"
                                id="acupuncture-cupping"
                                {...register("acupuncture-cupping")}
                            />
                            <label htmlFor="acupuncture-cupping"> Acupuncture + Cupping </label>
                            <input
                                type="radio"
                                id="other"
                                {...register("other")}
                            />
                            <label htmlFor="other"> Other: </label>
                        </div>

                        <div id="radio">
                            <label htmlFor="pregnancy"> Are you pregnant? </label>
                            <input
                                type="radio"
                                id="pregnant"
                                {...register("pregnant")}
                            />
                            <label htmlFor="pregnant"> Yes </label>
                            <input
                                type="radio"
                                id="not-pregnant"
                                {...register("not-pregnant")}
                            />
                            <label htmlFor="not-pregnant"> No </label>
                        </div>

                        <div id="radio">
                            <label htmlFor="experiences"> Have you had acupuncture before? </label>
                            <input
                                type="radio"
                                id="experience"
                                {...register("experience")}
                            />
                            <label htmlFor="experience"> Yes </label>
                            <input
                                type="radio"
                                id="no-experience"
                                {...register("no-experience")}
                            />
                            <label htmlFor="no-experience"> No </label>
                        </div>

                        <div id="radio">
                            <label htmlFor="reference"> How did you find out about Acupuncture By Kim?</label>
                            <input
                                type="radio"
                                id="instagram"
                                {...register("instagram")}
                            />
                            <label htmlFor="instagram"> Instagram </label>
                            <input
                                type="radio"
                                id="facebook"
                                {...register("facebook")}
                            />
                            <label htmlFor="facebook"> Facebook </label>
                            <input
                                type="radio"
                                id="friend"
                                {...register("friend")}
                            />
                            <label htmlFor="friend"> Referred by a friend </label>
                        </div>

                        <div id="checkbox">
                            <input
                                type="checkbox"
                                id="terms-and-conditions"
                                {...register("terms-and-conditions")}
                            />
                            Ik ga akkoord met de voorwaarden
                        </div>
                        <p>
                            GDPR
                            Acupuncture by Kim will treat your private data according to Article 5.1-2 of GDPR/AVG
                            European Data Protection Regulation of May 25th, 2018
                        </p>
                        <div id="privacy">

                        </div>

                        <div>
                            <button
                                type="submit"
                            >
                                Send
                            </button>
                        </div>

                    </div>
                </form>
            </main>
        </>
    );
}

export default IntakeForm;
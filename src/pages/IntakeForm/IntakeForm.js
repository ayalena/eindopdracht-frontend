import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import logo from "../../assets/logo.png";
import {useForm} from "react-hook-form";
import './IntakeForm.css';
import axios from "axios";
import {useHistory} from "react-router-dom";


function IntakeForm() {
    const {register, handleSubmit, formState: {errors}, watch} = useForm();
    const history = useHistory()
    const genderChoice = watch('gender');

    async function onFormSubmit(data) {
        //POST METHODE NAAR BACKEND USERPROFILE CONTROLLER

        const token = localStorage.getItem("token")
        try {
            await axios.post(`http://localhost:8080/api/user-profile`, {
                email: data.email,
                firstName: data.firstName,
                lastName: data.lastName,
                age: data.age,
                gender: data.gender,
                address: data.address,
                postalCode: data.postalCode,
                phoneNumber: data.phoneNumber,
                message: data.message,
                sessionType: data.sessionType,
                isPregnant: data.isPregnant,
                hadAcu: data.hadAcu,
                reference: data.reference,
                isAgree: data.isAgree,
            }, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            })
            history.push("/userprofilepage")
        } catch (e) {
            console.error(e)
        }
        onFormSubmit(data)
    }



    return (
        <>
            <PageHeader icon={logo} title="Personal Info"/>
            <main>
                <form onSubmit={handleSubmit(onFormSubmit)}>
                    <div className="form-container">
                        <div>
                            <label htmlFor="email"> E-mail </label>
                            <input
                                type="text"
                                id="email"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Please fill in your email"
                                    },
                                    min: {
                                        // value: "has to contain an @",
                                        message: "Please fill in a valid e-mail address",
                                    },
                                })}
                            />
                            {errors.email && <p>{errors.email.message}</p>}
                        </div>

                        <div>
                            <label htmlFor="first-name"> First Name </label>
                            <input
                                type="text"
                                id="first-name"
                                {...register("firstName", {
                                    required: {
                                        value: true,
                                        message: "Please fill in your name",
                                    },
                                    minLength: {
                                        value: 3,
                                        message: "Name has to be at least 3 characters",
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
                                        message: "Please fill in your last name"
                                    },
                                })}
                            />
                            {errors.lastName && <p>{errors.lastName.message}</p>}
                        </div>

                        <div>
                            <label htmlFor="age"> Leeftijd </label>
                            <input
                                type="number"
                                id="age"
                                {...register("age", {
                                    required: {
                                        value: true,
                                        message: "Please fill in your age"
                                    },
                                    min: {
                                        value: 18,
                                        message: "You have to be at least 18",
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
                                        message: "Please fill in your address"
                                    },
                                })}
                            />
                            {errors.lastName && <p>{errors.lastName.message}</p>}
                        </div>

                        <div>
                            <label htmlFor="postal-code"> Postal Code </label>
                            <input
                                type="text"
                                id="postal-code"
                                {...register("postalCode", {
                                    required: {
                                        value: true,
                                        message: "Please fill in your postal code"
                                    },
                                    pattern: {
                                        value: /^(?:NL-)?(\d{4})\s*([A-Z]{2})$/i,
                                        message: "Please fill in a valid postal code",
                                    },
                                })}
                            />
                            {errors.postalCode && <p>{errors.postalCode.message}</p>}
                        </div>

                        <div>
                            <label htmlFor="country"> Country </label>
                            <input
                                type="text"
                                id="country"
                                {...register("country", {
                                    required: {
                                        value: true,
                                        message: "Please fill in your country"
                                    },
                                })}
                            />
                            {errors.country && <p>{errors.country.message}</p>}
                        </div>

                        <div>
                            <label htmlFor="phone-number"> Phone number </label>
                            <input
                                type="number"
                                id="phone-number"
                                {...register("phoneNumber", {
                                    required: {
                                        value: true,
                                        message: "Please fill in your phone number"
                                    },
                                    min: {
                                        value: 18,
                                        message: "PLease fill in a valid phone number",
                                    },
                                })}
                            />
                            {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
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
                            I agree with the terms and conditions
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
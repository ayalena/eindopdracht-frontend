import React from "react";
import './InputField.css';

function InputField({
                        type,
                        id,
                        placeholder,
                        register,
                        registerName,
                        required,
                        requiredMessage,
                        minLength,
                        minLengthMessage,
                        maxLength,
                        maxLengthMessage,
                        errors,
                        patternValue,
                        patternMessage,
                    }) {

    return (
        <>
            <input type={type}
                   id={id}
                   placeholder={placeholder}
                   {...register(registerName, {
                           required: {
                               value: required,
                               message: requiredMessage,
                           },
                           minLength: {
                               value: minLength,
                               message: minLengthMessage
                           },
                           maxLength: {
                               value: maxLength,
                               message: maxLengthMessage
                           },
                           pattern: {
                               value: patternValue,
                               message: patternMessage,
                           },
                       },
                   )}
            />
            {errors[registerName] && <p>{errors[registerName].message}</p>}
        </>
    );
}

export default InputField;
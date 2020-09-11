
import React from "react";

const initailValidation = { required: { message: "Required Field" } };

const TextBox = (props) => {

    let validationInit = null;

    if (props.required) {
        validationInit = props.validation || initailValidation;
    }

    if (props.validation) {
        validationInit = props.validation;
    }

    return (
        <>
            <div className="input-group">
                <input
                    type={props.type || "text"}
                    name={props.name}
                    defaultValue={props.defaultValue}
                    autoComplete={props.autoComplete || "false"}
                    placeholder={props.placeholder}
                    className={props.errors ? "form-control form-control--error" : "form-control"}
                    onChange={(e) => { props.handleOnChange(e); }}
                    ref={props.register.bind(this,
                        {
                            validations: validationInit
                        })}
                />
            </div>
            {props.errors && <div className="form-control--help red pt-8">{props.errors}</div>}
        </>
    );
};

export { TextBox };
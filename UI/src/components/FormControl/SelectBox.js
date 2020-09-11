
import React from "react";

const initailValidation = { required: { message: "Required Field" } };

const getOptions = (options) => {
    if (!options || options.length === 0) return;

    return options.map((item, idx) => {
        return (
            <option key={idx} value={item.v}>{item.dv}</option>
        )
    });
}

const SelectBox = (props) => {
    return (
        <>
            <div className="input-group">
                <select
                    name={props.name}
                    className={props.errors ? "form-control form-control--error" : "form-control"}
                    onChange={(e) => { props.handleOnChange(e) }}
                    defaultValue={props.defaultValue}
                    ref={props.register.bind(this,
                        {
                            validations: props.required ? (props.validation || initailValidation) : null
                        })}>
                    <option value="">--Select--</option>

                    {getOptions(props.options)}
                </select>

            </div>
            {props.errors && <div className="form-control--help red pt-8">{props.errors}</div>}
        </>
    )
}

export { SelectBox }
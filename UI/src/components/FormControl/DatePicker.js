
import React, { useState, useEffect, useRef } from "react";
import DropDown from "../../Vendor/dropdown";
import Calendar from 'react-calendar';
import moment from "moment";


const initailValidation = { required: { message: "Required Field" } };

const DatePicker = (props) => {

    const defaultdate = props.defaultValue && moment(props.defaultValue).format('L');

    const [date, setdate] = useState(props.defaultValue);
    const [displayDate, setDisplayDate] = useState(defaultdate);
    const [isOpen, setIsOpen] = useState(false);

    const datePickerRef = useRef(null);


    const customhandleOnChange = (e) => {
        if (props.handleOnChange) {
            props.handleOnChange(e)
        }
    }
    const onChange = (value) => {
        const dd = moment(value).format('L');

        if (datePickerRef) {
            customhandleOnChange({
                target: {
                    name: props.name,
                    value: value
                }
            });
        }

        setdate(value);
        setDisplayDate(dd);
    }

    const onClickDay = () => {
        setIsOpen(false);
    }

    useEffect(() => {

        setdate(props.defaultValue || date);

        if(props.defaultValue){
            const d = moment(props.defaultValue).format('L');
            setDisplayDate(d);
        }

    }, [props.defaultValue, date])

    const getIcon = () => {
        return (
            <div className="input-group__append">
                
                    <DropDown
                        element={<span className="picker-icon"><i className="fa fa-calendar"></i></span>}
                        containerClass="custom-drop-down"
                        elementClass="custom-drop-down__elem"
                        dropDownClass="custom-drop-down__content"
                        placement="right"
                        isOpen={isOpen}
                        width={280}
                    >
                        <Calendar
                            onChange={onChange}
                            value={date}
                            onClickDay={onClickDay}
                        />

                    </DropDown>
            </div >
        );
    }

    return (
        <>
            <div className="input-group" ref={datePickerRef}>
                <input
                    type="hidden"
                    onChange={(e) => { customhandleOnChange(e) }}
                    defaultValue={date}
                    name={props.name}
                    ref={props.register.bind(this,
                        {
                            validations: props.required ? (props.validation || initailValidation) : null
                        })}
                />
                <input
                    type={props.type || "text"}
                    defaultValue={displayDate}
                    autoComplete={props.autoComplete || "false"}
                    placeholder="dd/mm/yyyy"
                    className={props.errors ? "form-control form-control--error" : "form-control"}


                />
                {getIcon()}

            </div>

            {props.errors && <div className="form-control--help red pt-8">{props.errors}</div>}
        </>
    )
}

export { DatePicker }
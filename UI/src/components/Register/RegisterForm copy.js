import React, { useContext } from "react";
import notificationContext from "../../Context/NotificationContext";
import { useForm } from "../../Hooks/UseForm";
import { setSessionStorage } from "../../Authentication/index";
import { TextBox } from "../FormControl/TextBox";
import axios from "axios";

const RegisterForm = (props) => {
    const data = {};
    let errorStatus = false;
    const { showAlert } = useContext(notificationContext);
    const { errors, register, handleOnChange, handleSubmit } = useForm();
    const { history } = props;

    function onSuccess(response) {
        if (response.statusCode !== "Invalid" && !errorStatus) {
            setSessionStorage(response.data);
            history.push("/Dashboard");
        } else {
            errorStatus = true;
            showAlert("danger login-invalid-alert fixed tp-20 tc", "Please Check Email-id and Password -- Invalid Login Attempt!!!");
        }
    }

    function onSubmit(data) {
        axios.post("http://localhost:58718/api/user", data)
            .then(function (response) {
                errorStatus = false;
                onSuccess(response.data);
            })
            .catch(function () {
                errorStatus = true;
            });
    }

    return (
        <div className="registerForm pa-24">
            <form onSubmit={(e) => handleSubmit(onSubmit, e)}>
                <div className="mb-16">
                    <div className="form-label mb-2">First Name</div>
                    <TextBox
                        errors={errors.firstName}
                        register={register}
                        handleOnChange={handleOnChange}
                        defaultValue={data.firstName}
                        name="firstName"
                        required
                        validation={
                            {
                                required: { message: "First Name is Required" }
                            }
                        }
                    />
                </div>

                <div className="mb-16">
                    <div className="form-label mb-2">Last Name</div>
                    <TextBox
                        errors={errors.lastName}
                        register={register}
                        handleOnChange={handleOnChange}
                        defaultValue={data.lastName}
                        name="lastName"
                        required
                        validation={
                            {
                                required: { message: "Last Name is Required" }
                            }
                        }
                    />
                </div>

                <div className="mb-16">
                    <div className="form-label mb-2">Email</div>
                    <TextBox
                        errors={errors.email}
                        register={register}
                        handleOnChange={handleOnChange}
                        defaultValue={data.email}
                        name="email"
                        required
                        validation={
                            {
                                required: { message: "Email is Required" }
                            }
                        }
                    />
                </div>

                <div className="mb-16">
                    <div className="form-label mb-2">Mobile</div>
                    <TextBox
                        errors={errors.mobile}
                        register={register}
                        handleOnChange={handleOnChange}
                        defaultValue={data.mobile}
                        name="mobile"
                    />
                </div>

                <div className="mb-16">
                    <div className="form-label mb-2">Password</div>
                    <TextBox
                        errors={errors.password}
                        register={register}
                        handleOnChange={handleOnChange}
                        defaultValue={data.mobile}
                        name="password"
                        required
                        validation={
                            {
                                required: { message: "password is Required" }
                            }
                        }
                    />
                </div>

                <div className="mb-16">
                    <div className="form-label mb-2">Photo</div>
                    <TextBox
                        type="file"
                        errors={errors.photo}
                        register={register}
                        handleOnChange={handleOnChange}
                        defaultValue={data.photo}
                        name="photo"
                    />
                </div>

                <div className="button-row flex items-center">
                    <button type="submit" className="button button--brand pointer">Save Profile</button>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;
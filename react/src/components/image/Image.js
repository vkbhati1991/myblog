import React, { useState, useContext } from "react";
import axios from "axios";
import notificationContext from "../../Context/NotificationContext";
import API from "../../../api";

/*eslint-disable */
const ImageUpload = () => {

    const [data, setData] = useState();
    const { showAlert } = useContext(notificationContext);

    const onSubmitData = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('image', data);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }

        axios.post(API.UPLOAD_IMAGE, formData, config).then((response) => {
            if (response.status === 200) {
                showAlert("success tp-20 tc", "Post Publish successfully");
                console.log(response);
            }
        });
    };

    const handleOnChange = (e) => {

        setData(e.target.files[0]);
    }

    return (
        <div className="createBlog">
            <div className="container pt-4">
                <form onSubmit={onSubmitData}>
                    <div className="form-group">
                        <label htmlFor="title">Upload Image</label>
                        <input type="file" name="image" onChange={handleOnChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">publish</button>
                </form>
            </div>
        </div>
    );
};

export default ImageUpload;
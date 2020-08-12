import React, { useState } from "react";
import axios from "axios";
import API from "../../../api";

/*eslint-disable */
const ImageUpload = () => {

    const initailState = {
        image: null
    }
    const [data, setData] = useState(initailState);

    const onSubmitData = data => {
        axios.post(API.UPLOAD_IMAGE, data).then((response) => {
            if (response.status === 200) {
                showAlert("success tp-20 tc", "Post Publish successfully");
                window.location.replace(`${API.URL}/${response.data._id}`);
            }
        });
    };

    const handleOnChange = (e) => {
        const updatedState = {
            image: e.target.value
        }

        setData(updatedState);
    }

    return (
        <div className="createBlog">
            <div className="container pt-4">
                <form enctype="multipart/form-data" onSubmit={onSubmitData}>
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
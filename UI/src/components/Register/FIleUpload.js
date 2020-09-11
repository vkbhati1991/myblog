/* eslint-disable */

import React, { useState } from 'react';
import axios from "axios";

const Fileupload  = (props) => {

    const [image, setImage] = useState(null);

    const submit = (e) =>  {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', image);
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'

            },
        };
        axios.post("http://localhost:58718/api/image", formData, config).then(function (response) {
            if(props.GetFileName){
                props.GetFileName(response.data);
            }
        });
    }
    const setFile = (e) => {
        setImage(e.target.files[0]);
    }
    return (
        <div>
            <input type="file" onChange={e => setFile(e)} />
            <button onClick={e => submit(e)} className="button button--brand" type="submit">Upload</button>
        </div>
    );
}

export default Fileupload 
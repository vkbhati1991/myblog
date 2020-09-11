
/*eslint-disable */
import React, { useContext, useState } from "react";
//import { useForm } from "react-hook-form";
// import CKEditor from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import notificationContext from "../../Context/NotificationContext";
import axios from "axios";
import API from "../../../api";

import CKEditor from 'ckeditor4-react';
import { configCkEditor } from "./CkEditorConfig";


const CreateBlog = (props) => {

    let defaultTitle = null;
    let defaultCreatedBy = "Vinod Kumar";
    let defaultContent = null;

    const { showAlert } = useContext(notificationContext);


    const { pageModel } = props;

    if (!pageModel) return;

    const { blog, edit } = pageModel;

    if (blog) {
        defaultTitle = blog.title;
        defaultCreatedBy = blog.createdBy,
        defaultContent = blog.content;
    }


    const [title, setTitle] = useState(defaultTitle);
    const [thumbImage, setThumbImage] = useState(null);
    const [content, setContent] = useState(defaultContent);

    const onSubmit = () => {

        const formData = new FormData();
        formData.append('title', title);
        formData.append('createdBy', defaultCreatedBy);
        formData.append('thumbImage', thumbImage);
        formData.append('content', content);

        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };

        if (edit === true) {
            axios.put(`${API.CREATE_BLOG}/${blog._id}`, formData, config).then((response) => {
                if (response.status === 200) {
                    showAlert("success tp-20 tc", "Blog Updated successfully");
                }
            });
        } else {
            axios.post(API.CREATE_BLOG, formData, config).then((response) => {
                if (response.status === 200) {
                    showAlert("success tp-20 tc", "Blog Publish successfully");
                }
            });
        }
        
    };

    function onTitleChange(evt) {
        setTitle(evt.target.value);
    }

    function onThumbImageChange(evt) {
        setThumbImage(evt.target.files[0]);
    }

    function onEditorChange(evt) {
        setContent(evt.editor.getData());
    }

    return (
        <div className="createBlog">
            <div className="admin-blog-list-header flex items-center mb-20">
                <div className="admin-comp-list-title flex-1 f20 ff-bold">Add New</div>
                <a href="/admin/blog/" className="button button--danger">Blog List</a>
            </div>
            <div className="container pt-4">
                <div>
                    <div className="form-group mb-20">
                        <div className="pb-8 db" htmlFor="title">Title</div>
                        <div className="input-group">
                            <input onChange={onTitleChange} defaultValue={defaultTitle} type="text" name="title" className="form-control" id="title" />
                        </div>
                    </div>

                    <div className="form-group mb-20">
                        <div className="pb-8 db" htmlFor="title">Thumb Image</div>
                        <div className="input-group">
                            <input onChange={onThumbImageChange} type="file" name="thumbImage" className="form-control" id="thumbImage" />
                        </div>
                    </div>

                    <div className="form-group mb-20">
                        <div className="pb-8 db" htmlFor="title">Created By </div>
                        <div className="input-group">
                            <input type="text" name="createdBy" defaultValue={defaultCreatedBy} className="form-control" id="createdBy" />
                        </div>
                    </div>

                    <div className="form-group mb-20">
                        <div className="pb-8 db" htmlFor="Blog">Blog</div>
                        <CKEditor
                            config={configCkEditor}
                            onChange={onEditorChange}
                            data={content} />

                    </div>

                    <button onClick={onSubmit} className="button button--brand">publish</button>
                    <a href="/" className="button button--brand mh-8">Back</a>
                </div>
            </div>
        </div >
    );
};

export default CreateBlog;
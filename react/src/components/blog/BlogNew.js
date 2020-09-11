
/*eslint-disable */
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
// import CKEditor from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import notificationContext from "../../Context/NotificationContext";
import axios from "axios";
import API from "../../../api";

import CKEditor from 'ckeditor4-react';
import { configCkEditor } from "./CkEditorConfig";


const BlogNew = (props) => {

  let defaultTitle = null;
  let defaultContent = null;

  const { showAlert } = useContext(notificationContext);


  const { pageModel } = props;

  if (!pageModel) return;

  const { post, edit } = pageModel;

  if (post) {
    defaultTitle = post.title;
    defaultContent = post.content;
  }


  const [title, setTitle] = useState(defaultTitle);
  const [content, setContent] = useState(defaultContent);

  const data = {
    title,
    content
  };

  console.log(data);

  const onSubmit = () => {
    console.log(data);
    if (edit === true) {
      axios.put(`${API.EDIT_BLOG}/${post._id}`, data).then((response) => {
        if (response.status === 200) {
          showAlert("success tp-20 tc", "Blog Updated successfully");
          window.location.replace(`${API.URL}/${response.data._id}`);
        }
      });
    }
    axios.post(API.CREATE_BLOG, data).then((response) => {
      if (response.status === 200) {
        showAlert("success tp-20 tc", "Post Publish successfully");
        window.location.replace(`${API.URL}/${response.data._id}`);
      }
    });
  };

  function onTitleChange(evt) {
    setTitle(evt.target.value);
  }

  function onEditorChange(evt) {
    setContent(evt.editor.getData());
  }

  return (
    <div className="createBlog">
      <div className="container pt-4">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input onChange={onTitleChange} defaultValue={defaultTitle} type="text" name="title" className="form-control" id="title" />
            {/* {errors.title && <div className="invalid-feedback db"> Title is Required </div>} */}
          </div>

          <div className="form-group">
            <label htmlFor="Blog">Blog</label>
            <CKEditor
              config={configCkEditor}
              onChange={onEditorChange}
              data={data.content} />

            {/* <textarea defaultValue={content} name="content" ref={register({ required: true })} className="form-control" id="Blog" ></textarea>
            {errors.content && <div className="invalid-feedback db"> Content is Required </div>} */}
          </div>

          <button type="submit" className="btn btn-primary">publish</button>
          <a href="/" className="btn btn-secondary">Back</a>
        </form>
      </div>
    </div >
  );
};

export default BlogNew;
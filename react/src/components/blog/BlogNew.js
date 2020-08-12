import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import CKEditor from "ckeditor4-react";
import notificationContext from "../../Context/NotificationContext";
import axios from "axios";
import API from "../../../api";

/*eslint-disable */
const BlogNew = (props) => {

    let defaultTitle = null;
    let defaultContent = null;

    const { showAlert } = useContext(notificationContext);
    const { register, handleSubmit, errors } = useForm();

    const { pageModel } = props;

    if (!pageModel) return;

    const { post, edit } = pageModel;

    if (post) {
        defaultTitle = post.title;
        defaultContent = post.content;
    }

    const [content, setContent] = useState(defaultContent);

    const onSubmit = data => {
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

    const onEditorChange = (evt) => {
        setContent(evt.editor.getData());
    };

    return (
        <div className="createBlog">
            <div className="container pt-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input defaultValue={defaultTitle} type="text" name="title" ref={register({ required: true })} className="form-control" id="title" />
                        {errors.title && <div className="invalid-feedback db"> Title is Required </div>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="Blog">Blog</label>
                        <CKEditor
                            config={{
                                filebrowserBrowseUrl: "/browser/browse.php",
                                filebrowserUploadUrl: "/uploader/upload.php",
                                filebrowserWindowWidth: "640",
                                filebrowserWindowHeight: "480",
                                scayt_autoStartup: true,
                                autoGrow_minHeight: 500,
                                autoGrow_bottomSpace: 200,
                                extraPlugins: "embed,autoembed,image2,language, mathjax, autogrow, colordialog,tableresize, codesnippet, placeholder, copyformatting,colorbutton, font",
                                codeSnippet_theme: "monokai_sublime",
                                language_list: ['hi:Hindi', 'es:English', 'ar:Arabic:rtl', 'fr:French', 'he:Hebrew:rtl', 'es:Spanish'],
                                contentsCss: [
                                    "http://cdn.ckeditor.com/4.14.1/full-all/contents.css",
                                    "https://ckeditor.com/docs/vendors/4.14.1/ckeditor/assets/css/widgetstyles.css"
                                ],
                                embed_provider: "//ckeditor.iframe.ly/api/oembed?url={url}&callback={callback}",
                                image2_alignClasses: ["image-align-left", "image-align-center", "image-align-right"],
                                image2_disableResizer: true,
                                mathJaxLib: "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-AMS_HTML",
                                coreStyles_bold: {
                                    element: "b",
                                    overrides: "strong"
                                },
                                coreStyles_italic: {
                                    element: "i",
                                    overrides: "em"
                                },
                                copyFormatting_allowedContexts: ["text"],
                                copyFormatting_allowRules: "strong;",
                                toolbarGroups: [{
                                    name: 'clipboard',
                                    groups: ['clipboard', 'undo']
                                  },
                                  {
                                    name: 'editing',
                                    groups: ['find', 'selection', 'spellchecker']
                                  },
                                  {
                                    name: 'links'
                                  },
                                  {
                                    name: 'insert'
                                  },
                                  {
                                    name: 'forms'
                                  },
                                  {
                                    name: 'tools'
                                  },
                                  {
                                    name: 'document',
                                    groups: ['mode', 'document', 'doctools']
                                  },
                                  {
                                    name: 'colors'
                                  },
                                  {
                                    name: 'others'
                                  },
                                  {
                                    name: 'about'
                                  },
                                  '/',
                                  {
                                    name: 'basicstyles',
                                    groups: ['basicstyles', 'cleanup']
                                  },
                                  {
                                    name: 'paragraph',
                                    groups: ['list', 'indent', 'blocks', 'align', 'bidi']
                                  },
                                  {
                                    name: 'styles'
                                  }
                                ],
                                format_tags: 'p;h1;h2;h3;h4;h5;h6;pre;address;div'
                            }}
                            onChange={onEditorChange}
                            data={content} />

                        <input type="hidden" defaultValue={content} name="content" ref={register({ required: true })} className="form-control" id="Blog" />
                        {errors.content && <div className="invalid-feedback db"> Content is Required </div>}
                    </div>
                    <button type="submit" className="btn btn-primary">publish</button>
                    <a href="/" className="btn btn-secondary">Back</a>
                </form>
            </div>
        </div>
    );
};

export default BlogNew;
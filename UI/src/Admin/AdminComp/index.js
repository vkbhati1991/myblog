import React, { useState, useContext } from 'react';
import CDN from '../../../cdn';
import Modal from '../../Dialog';
import axios from 'axios';
import notificationContext from '../../Context/NotificationContext';
import API from '../../../api';

const getList = (componentList, customSetTitle, customSetDesc, addNewComponent, customSetEdit, setId) => {
    const { showAlert } = useContext(notificationContext);
    if (!componentList || componentList.length <= 0) return;

    function getCompData(id) {
        axios.get(`${API.URL}/admin/comp/${id}`).then((response) => {
            console.log(response.data);
            if (response.status === 200) {
                customSetTitle(response.data.title);
                customSetDesc(response.data.desc);
                addNewComponent(true);
                customSetEdit(true);
                setId(response.data._id);
            }
        });
    }

    function deleteCompData(id) {
        axios.delete(`${API.URL}/admin/comp/${id}`).then((response) => {
            console.log(response.data);
            if (response.status === 200) {
                showAlert('success tp-20 tc', 'Delete Create successfully');
                setTimeout(() => { window.location.replace(`${API.URL}/admin/comp`); }, 2000);
               
            }
        });
    }

    return componentList.map((c, i) => {

        return (
            <div className="grd-col-4 pa-12" key={i}>
                <div className="tech-card bg-white br10 pa-24 trans-3 ba b--light-gray">
                    <div className="tech-card-img wt50 m-auto  pb-20">
                        <img src={`${CDN.BASEUPLOAD}/${c.imageUrl}`} alt={c.imageUrl} />
                    </div>
                    <a href={`/comp/${c._id}`} className="tech-card-title f20 db tc primary ff-medium mb-12">{c.title}</a>
                    <a href={`/comp/${c._id}`} className="tech-card-desc db secondary f16 lh-copy tc">{c.desc}</a>
                    <div className="mid ph-16 pt-16 mt-16">
                        <a className="button button--small button--brand mh-8" onClick={() => { getCompData(c._id); }}>Edit</a>
                        <a className="button button--small button--danger mh-8" onClick={() => { deleteCompData(c._id); }}>Delete</a>
                       
                    </div>
                </div>

            </div>
        );
    });
};

const AdminComp = (props) => {

    const [isAddNew, setIsNew] = useState(false);

    const [title, setTitle] = useState(null);
    const [isEdit, setEdit] = useState(false);
    const [desc, setDesc] = useState(null);
    const [elemId, setId] = useState(null);
    const [compimage, setCompimage] = useState(null);
    const { showAlert } = useContext(notificationContext);

    const { pageModel } = props;

    const { compList } = pageModel;

    const addNewComponent = (val) => {
        setIsNew(val);
    };

    function customSetTitle(title) {
        setTitle(title);
    }

    function customSetDesc(desc) {
        setDesc(desc);
    }

    function customSetImage(img) {
        setCompimage(img);
    }

    function customSetEdit(val) {
        setEdit(val);
    }

    const onSubmitData = (id) => {

        const formData = new FormData();
        formData.append('title', title);
        formData.append('desc', desc);
        formData.append('compimage', compimage);

        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };

        if (isEdit === true) {
            axios.put(`${API.URL}/admin/comp/${id}`, formData, config).then((response) => {
                if (response.status === 200) {
                    showAlert('success tp-20 tc', 'Record Updated successfully');
                    addNewComponent(false);
                    window.location.replace(`${API.URL}}/admin/comp/`);
                }
            });
        } else {
            axios.post(`${API.URL}/admin/comp`, formData, config).then((response) => {
                if (response.status === 200) {
                    showAlert('success tp-20 tc', 'Record Create successfully');
                    addNewComponent(false);
                    window.location.replace(`${API.URL}}/admin/comp/`);
                }
            });
        }

    };

    if (!compList) return null;

    return (
        <div className="admin-comp-list">
            <div className="admin-com-list-header flex items-center ph-16 mb-20">
                <div className="admin-comp-list-title flex-1 f20 ff-bold">Component List</div>
                <a className="button button--danger" onClick={() => addNewComponent(true)}>Add New Component</a>
            </div>
            <div className="grd-row">{getList(compList, customSetTitle, customSetDesc, addNewComponent, customSetEdit, setId)}</div>
            {isAddNew && <Modal onClose={setIsNew} title="Add New Component">
                <div>
                    <div className="form-row">
                        <div className="form-element mb-20">
                            <div className="elem-label ff-bold f14 pb-8">Image</div>
                            <div className="elem-control">
                                <input type="file" onChange={(e) => { customSetImage(e.target.files[0]); }} name="compimage" />
                            </div>
                        </div>
                        <div className="form-element mb-20">
                            <div className="elem-label ff-bold f14 pb-8">Title</div>
                            <div className="elem-control">
                                <div className="input-group">
                                    <input defaultValue={title} type="text" name="title" onChange={(e) => { customSetTitle(e.target.value); }} />
                                </div>
                            </div>
                        </div>
                        <div className="form-element mb-20">
                            <div className="elem-label ff-bold f14 pb-8">Content</div>
                            <div className="elem-control">
                                <div className="input-group">
                                    <textarea defaultValue={desc} rows="5" name="desc" className="form-control" onChange={(e) => { customSetDesc(e.target.value); }}></textarea>
                                </div>

                            </div>
                        </div>
                        <div className="form-element mid">
                            <button onClick={() => onSubmitData(elemId)} className="button button--brand">Submit</button>
                        </div>
                    </div>
                </div>
            </Modal>}
        </div>

    );
};

export default AdminComp;
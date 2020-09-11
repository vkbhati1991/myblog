import React from 'react';

const Modal = (props) => {
    return (
        <div className="modal-right">
            <div className="modal-header flex-1 flex items-center ph-16 bb b--light-gray ht-4">
                <span className="ff-bold f16 flex-1">{props.title}</span>
                <span className="close pointer secondary f13" onClick={() => props.onClose(false)}>X Close</span>
            </div>
            <div className="modal-body pa-16">{props.children}</div>
        </div>
    );
};

export default Modal;
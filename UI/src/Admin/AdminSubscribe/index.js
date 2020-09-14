import React from 'react';

const getList = (props) => {

    const { pageModel } = props;

    if (!pageModel) return;

    const { emailList } = pageModel;

    if (!emailList || emailList.length <= 0) return;

    return emailList.map((e, i) => {
        return (
            <tr key={i}>
                <td>{e.email}</td>
                <td>{e.isActive}</td>
                <td>
                    <a className="pointer button button--small button--danger">disable email</a>
                </td>
            </tr>
        );
    });
};

const AdminSubscribe = (props) => {
    return (
        <div>
            <div className="admin-blog-list-header flex items-center mb-20">
                <div className="admin-comp-list-title flex-1 f20 ff-bold">Subscriber List</div>
            </div>
            <div className="ba b--light-gray">
                <table>
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Active</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getList(props)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminSubscribe;
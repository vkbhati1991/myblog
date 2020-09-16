import React from 'react';

const getList = (props) => {

    const { pageModel } = props;

    if (!pageModel) return;

    const { contactList } = pageModel;

    if (!contactList || contactList.length <= 0) return;

    return contactList.map((e, i) => {
        return (
            <tr key={i}>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>
                    {e.message}
                </td>
            </tr>
        );
    });
};

const AdminContact = (props) => {
    return (
        <div>
             <div className="admin-com-list-header flex items-center ph-16 mb-20">
                <div className="admin-comp-list-title flex-1 f20 ff-bold">Contact List</div>
               
            </div>
            <div className="ba b--light-gray">
                <table>
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>email</th>
                            <th>message</th>
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

export default AdminContact;
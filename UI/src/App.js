import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Notification from './Context/Notification';
import Layout from './components/Layout';
import AdminLayout from './Admin/AdminLayout';

const App = (props) => {
    const [appModel, setAppModel] = useState(props);

    useEffect(() => {
        setAppModel(props);
    }, [props]);

    if (appModel.isAdmin) {
        return (
            <Notification>
                <AdminLayout {...appModel} />
            </Notification>
        );
    }

    return (
        <Notification>
            <Layout {...appModel} />
        </Notification>
    );
};

window.App = App;
window.React = React;
window.ReactDOM = ReactDOM;
export default App;
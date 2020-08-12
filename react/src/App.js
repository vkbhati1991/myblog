
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Notification from "./Context/Notification";
import Layout from "./Layout/index";

const App = (props) => {
    const [appModel, setAppModel] = useState(props);

    useEffect(() => {
        setAppModel(props);
    }, [props]);

    return <Notification><Layout {...appModel} /></Notification>;
};

window.App = App;
window.React = React;
window.ReactDOM = ReactDOM;
export default App;

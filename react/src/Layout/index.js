import React from "React";
import getComponent from "../components/pages";
import AppHeader from "./AppHeader";

const Layout = (props) => {
    return (
        <div className="blog-app">
            <div className="blog-app__header"><AppHeader /></div>
            <div className="blog-app__body">{getComponent(props)}</div>
        </div>
    );
};

export default Layout;

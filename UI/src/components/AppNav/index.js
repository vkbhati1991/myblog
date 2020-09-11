import React, { useState, useEffect } from "react";
import useDevice from "../../Hooks/UseDevice";
import { UseFetchData } from "../../Hooks/UseFetchData";
import { NavLink } from "react-router-dom";

const { hideMob } = useDevice();

const getSubMenu = (subMenu) => {

    if (!subMenu || subMenu.length <= 0) return null;

    return subMenu.map((item, idx) => {
        return (
            <NavLink key={idx}
                className="nav-link db primary f15  mb-16 ttc"
                to="/"
            >
                {item.subMenuName}
            </NavLink>);
    });

};

const getMenu = (menus) => {

    if (!menus || menus.length <= 0) return null;

    const getmenulist = () => {
        return menus.map((menu, idx) => {
            return (
                <div key={idx} className="grd-col-md-2">
                    <h2 className="f18 ff-bold mb-16 brand">{menu.menuName}</h2>
                    {getSubMenu(menu.subMenu)}
                </div>
            );
        });
    };

    return (
        <div className="nav-item grd-row pa-24">
            {getmenulist()}
        </div >
    );
};

const AppNav = (props) => {
    const [menus, setmenus] = useState([]);
    const { data, loading, error } = UseFetchData("http://localhost:58718/api/menu");

    console.log(menus, loading, error);

    useEffect(() => {
        let isCancelled = false;
        if (!isCancelled) {
            setmenus(data);
        }

        return () => isCancelled = true;

    }, [data]);

    return (
        <div className="app-nav fixed overflow-auto wt--100 z-999">
            <div className="app-nav-items">
                {!hideMob && <div className="pt-20 ph-20"> {props.appSearch()}</div>}
                {loading ? "loading..." : getMenu(menus)}
                {error && "Error in Fetch Data"}
            </div>
        </div>
    );
};

export default AppNav;
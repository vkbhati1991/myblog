import React from 'react';

const appMenuList = (props) => {
    const nav = props.nav;

    if (!nav) {
        return;
    }

    const { component } = nav;

    if (!component || component.length <= 0) return;

    const menuList = component.map((m, i) => {
        return (
            <li key={i} className="nav-sub-menu-item grd-col-4 pa-12">
                <a href={`/comp/${m._id}`} className="nav-sub-menu-link  db pointer primary ff-bold f11 ttu flex items-center">{m.title}
                </a>
            </li>
        );
    });

    return (
        <div className="nav-sub-menu absolute trans-2">
            <ul className="nav-sub-menu-row grd-row pa-16 br4 bg-white relative">{menuList}</ul>
        </div>
    );
};

const AppMenu = (props) => {
    return (
        <div className="mid flex-1">
            <ul className="nav-menu flex items-center">
                <li className="nav-menu-item ph-16">
                    <a href="/" className="nav-menu-link flex items-center pointer primary">
                        <span className="nav-link-text ttu mh-6 f13 ff-bold">home</span>
                    </a>
                </li>
                <li className="nav-menu-item ph-16">
                    <a href="/comp" className="nav-menu-link flex items-center pointer primary">
                        <span className="nav-link-text ttu mh-6 f13 ff-bold">Component</span>
                    </a>
                </li>

                <li className="nav-menu-item ph-16">
                    <a href="/blog" className="nav-menu-link flex items-center pointer primary">
                        <span className="nav-link-text ttu mh-6 f13 ff-bold">Blog</span>
                    </a>
                </li>

                <li className="nav-menu-item ph-16 relative">
                    <a href="/" className="nav-menu-link flex items-center pointer primary">
                        <span className="nav-link-text ttu mh-6 f13 ff-bold">web Solution</span>
                        <span className="nav-link-icon menu-arrow mh-6 trans-3"></span>
                    </a>
                    {appMenuList(props)}
                </li>

            </ul>
        </div>
    );
};

export default AppMenu;
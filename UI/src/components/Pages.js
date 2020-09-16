/* eslint-disable*/
import Home from './Routes/Home/Index';
import About from './Routes/About/index';
import Blog from './Routes/Blog/index';
import TermCondition from './Routes/Term/index';
import Policy from "./Routes/Policy/index";
import Login from "./Routes/Login/index";
import SignUp from "./Routes/Signup/index";
import Comp from "./Routes/Component/index";
import CompDetail from './Routes/CompDetail/index';
import { pageTypes } from './Constant';
import BlogDetail from './Routes/BlogDetail';
import Contact from './Routes/Contact';

const getComponent = (props) => {
    switch (props.pageType) {
        case pageTypes.HOME:
            return <Home {...props} />;
        case pageTypes.ABOUT:
            return <About {...props} />;
        case pageTypes.BLOG:
            return <Blog {...props} />;
        case pageTypes.BLOG_DETAIL:
            return <BlogDetail {...props} />;
        case pageTypes.TERM:
            return <TermCondition {...props} />;
        case pageTypes.PRIVACY:
            return <Policy {...props} />;
        case pageTypes.LOGIN:
            return <Login {...props} />;
        case pageTypes.REGISTER:
            return <SignUp {...props} />;
        case pageTypes.COMPONENT:
            return <Comp {...props} />;
        case pageTypes.COMPONENT_DETAIL:
            return <CompDetail {...props} />;
            case pageTypes.CONTACT:
            return <Contact {...props} />;
        default:
            return <Home {...props} />;
    }
};

export default getComponent;

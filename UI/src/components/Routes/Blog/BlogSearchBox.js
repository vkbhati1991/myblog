import React, { useState } from 'react';
import DropDown from '../../../Dropdown';

const BlogSearchBox = (props) => {
    const { blogList, width } = props;

    const [searchList, setSearchList] = useState([]);

    const getSearchList = () => {
        if (!searchList || searchList.length <= 0) {
            return <div className="tc primary brand pa-20">Please Type Keyword</div>;
        }

        return searchList.map((elem, idx) => {
            return (
                <a href={`/blog/${elem._id}`} key={idx} className="pv-12 ph-16 primary bb db b--light-gray f14 ff-bold pointer">
                    {elem.title}
                </a>
            );
        });
    };

    const setSearchData = (e) => {
        if (!blogList || blogList.length <= 0) {
            return null;
        }

        const userSearchOptionArray = blogList.filter((elem) => {

            let target = e.target.value;
            if (target.length <= 0) return;
            target = target.toLowerCase();
            const title = elem.title.toLowerCase();

            return title.includes(target);
        });

        setSearchList(userSearchOptionArray);
    };

    return (
        <DropDown
            element={
                <div className="searchBlog wt--100 ht-3 bg-white br10 ba b--light-gray flex items-center">
                    <input onChange={(e) => setSearchData(e)} placeholder="Search Blog..." type="text" className="blgSearch br10 ht40 bg-transparent ph-16 f16 primary bn flex-1" />
                    <span className="material-icons-outlined ph-16 f20 secondary pointer">
                        search
                    </span>
                </div>
            }
            elementClass="wt--100 searchBlogBox"
            containerClass="drop-down-active"
            placement="left"
            width={width}
        >
            <div className="BlogSearch wt--100">
                {getSearchList()}
            </div>
        </DropDown>
    );
};

export default BlogSearchBox;
import React from "react";
import Trending from "../Trending";
import ReadMore from "../ReadMore";

const More = () => {
    return (
        <div className="detail-content pt-40">
            <ReadMore />
            <Trending />
        </div>
    );
};

export default More;
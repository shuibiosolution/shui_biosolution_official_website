import React from "react";
import "/public/stylesheets/whiteFrame.css";

function SHUIWhiteFrame(props) {
    return (
        <div className="white-frame">
            {props.children}
        </div>
    );
}

export default SHUIWhiteFrame;
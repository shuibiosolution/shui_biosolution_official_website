import React from "react";
import "/public/stylesheets/white-frame.css";

function SHUIWhiteFrame(props) {
    return (
        <div className="white-frame">
            {props.children}
        </div>
    );
}

export default SHUIWhiteFrame;
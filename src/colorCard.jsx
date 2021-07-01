// This component is deliberatedly separated from the Card component because it doesn't use an image as a background.
import React from "react";
import {  } from 'antd';
import 'antd/dist/antd.css';
import "/public/stylesheets/colorCard.css"

function SHUIColorCard(props) {

    return(
        <div className="color-card" style={props.style}>
            {props.children}
        </div>
    );
}

export default SHUIColorCard;
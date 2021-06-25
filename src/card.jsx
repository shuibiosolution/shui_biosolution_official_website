import React from "react";
import {  } from 'antd';
import 'antd/dist/antd.css';
import "/public/stylesheets/card.css"

function SHUICard(props) {

    return(
        <div className="card">
            <img src={props.image} className="card-image"/>
            {props.children}
        </div>
    );
}

export default SHUICard;
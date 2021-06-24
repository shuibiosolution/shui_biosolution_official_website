import React from "react";
import {  } from 'antd';
import 'antd/dist/antd.css';
import "/public/stylesheets/card1.css"

function SHUICard1(props) {

    return(
        <div className="card1">
            <img src={props.image} className="card1-image"/>
        </div>
    );
}

export default SHUICard1;
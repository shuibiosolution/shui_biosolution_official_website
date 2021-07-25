import React from "react";
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import "/public/stylesheets/sponsor.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

library.add(faLinkedin);

function SHUISponsor(props) {
    return (
        <Row>
            <a href={props.website} target="_blank"><img src={props.image} className="sponsor-image" /></a>
            <div className="sponsor-text">
                <p className="sponsor-name medium-text">{props.name} <a href={props.linkedin} target="_blank"> <FontAwesomeIcon icon={faLinkedin} color="white" className="sponsor-linkedin" /> </a></p>
                <p className="sponsor-role small-text">{props.intro1}</p>
                <p className="sponsor-intro small-text">{props.intro2}</p>
            </div>
        </Row>
    )
}

export default SHUISponsor;
import React from "react";
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import "/public/stylesheets/member.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

library.add(faLinkedin);

function SHUIMember(props) {
    return (
        <Row className="member">
            <img src={props.image} className="member-img" />
            <div className="member-text">
                <p className="name-title medium-text">{props.name_title}
                    <a href={props.linkedin} target="_blank"><FontAwesomeIcon icon={faLinkedin} color="white" /></a>
                </p>
                <p className="bio small-text">{props.bio}</p>
            </div>
        </Row>
    )
}

export default SHUIMember;
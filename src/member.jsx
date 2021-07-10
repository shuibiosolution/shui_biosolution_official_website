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
        <Row>
            <Col className="gutter-row" span={5}>
                <img src={props.image} />
            </Col>
            <Col className="gutter-row" span={19}>
                <p className="medium-text">{props.name_title}   <a href={props.linkedin} target="_blank"><FontAwesomeIcon icon={faLinkedin} color="white" /></a></p>
                <p className="small-text">{props.bio}</p>
            </Col>
        </Row>
    )
}

export default SHUIMember;
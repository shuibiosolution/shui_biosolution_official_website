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
        <Row gutter={[0, 0]}>
            <Col className="gutter-row" span={6}>
                <img src={props.image} className="sponsor-image"/><br />
                <a href={props.linkedin} target="_blank"><FontAwesomeIcon icon={faLinkedin} color="white" /></a>
                <a href={props.website} target="_blank"><img src="site.png" width="25%" /></a>
            </Col>
            <Col className="gutter-row" span={16}>
                <p className="medium-text">{props.name}</p>
                <p className="small-text">{props.intro1}</p>
                <p className="small-text">{props.intro2}</p>
            </Col>
        </Row>
    )
}

export default SHUISponsor;
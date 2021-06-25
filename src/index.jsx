import React from "react";
import ReactDOM from "react-dom";

import { Layout, Row, Col, Divider } from 'antd';
import SHUIMenu from "./menu.jsx";
import SHUICarousel from "./carousel.jsx";
import SHUIWhiteFrame1 from "./white-frame1.jsx";
import SHUICard1 from "./card1.jsx";
import SHUIWhiteFrame2 from "./white-frame2.jsx";

ReactDOM.render(<Layout className="layout">
    <SHUIMenu />
    <SHUICarousel />
    <SHUIWhiteFrame1 />
    <Row gutter={0}>
        <Col className="gutter-row" span={8}>
            <SHUICard1 image="/card1-1.png"/>
        </Col>
        <Col className="gutter-row" span={8}>
            <SHUICard1 image="/card1-2.png"/>
        </Col>
        <Col className="gutter-row" span={8}>
            <SHUICard1 image="/card1-3.png"/>
        </Col>
    </Row>
    <SHUIWhiteFrame2 />
</Layout>, document.getElementById("root"));
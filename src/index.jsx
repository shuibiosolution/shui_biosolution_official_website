import React from "react";
import ReactDOM from "react-dom";

import "/public/stylesheets/index.css";
import { Layout, Row, Col, Divider } from 'antd';
import SHUIMenu from "./menu.jsx";
import SHUICarousel from "./carousel.jsx";
import SHUIWhiteFrame1 from "./white-frame1.jsx";
import SHUICard from "./card.jsx";
import SHUIWhiteFrame2 from "./white-frame2.jsx";

ReactDOM.render(<Layout className="layout">
    <SHUIMenu />
    <SHUICarousel />
    <SHUIWhiteFrame/>
    <Row gutter={[0, 0]}>
        <Col className="gutter-row" span={8}>
            <SHUICard image="/card1.png" />
        </Col>
        <Col className="gutter-row" span={8}>
            <SHUICard image="/card2.png" />
        </Col>
        <Col className="gutter-row" span={8}>
            <SHUICard image="/card3.png" />
        </Col>
    </Row>
    <SHUIWhiteFrame/>
    <Row gutter={[0, 0]}>
        <Col className="gutter-row" span={12}>
            <SHUICard image="/card4.png" />
        </Col>
        <Col className="gutter-row" span={12}>
            <SHUICard image="/card5.png" />
        </Col>
    </Row>
    <SHUICard image="/card6.png" />
    <SHUICard image="/card7.png" />
</Layout>, document.getElementById("root"));
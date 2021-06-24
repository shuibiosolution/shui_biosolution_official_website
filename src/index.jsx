import React from "react";
import ReactDOM from "react-dom";

import { Layout, Row, Col } from 'antd';
import SHUIMenu from "./menu.jsx";
import SHUICarousel from "./carousel.jsx";
import SHUIWhiteFrame1 from "./white-frame1.jsx";
import SHUICard1 from "./card1.jsx";

ReactDOM.render(<Layout className="layout">
    <SHUIMenu />
    <SHUICarousel />
    <SHUIWhiteFrame1 />
    <Row gutter={0}>
      <Col span={8}>
        <div style={style}>col-6</div>
      </Col>
      <Col span={8}>
        <div style={style}>col-6</div>
      </Col>
      <Col span={8}>
        <div style={style}>col-6</div>
      </Col>
    </Row>
</Layout>, document.getElementById("root"));
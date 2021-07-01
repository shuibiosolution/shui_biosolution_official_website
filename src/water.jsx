import React from "react";
import ReactDOM from "react-dom";

import "/public/stylesheets/water.css";
import { Layout, Row, Col, Divider } from 'antd';
import SHUIMenu from "./menu.jsx";
import SHUICard from "./card.jsx";
import SHUIColorCard from "./colorCard.jsx";

const { Header, Content, Footer } = Layout;

ReactDOM.render(<Layout className="layout">

    <Header>
        <div className="logo" />
        <SHUIMenu />
    </Header>

    <Content>
        <Row gutter={[0, 0]}>
            <Col className="gutter-row" span={12}>
                <SHUICard image="/card1.png" />
            </Col>
            <Col className="gutter-row" span={12}>
                <SHUIColorCard image="/card2.png" />
            </Col>
        </Row>
        <Row gutter={[0, 0]}>
            <Col className="gutter-row" span={12}>
                <SHUIColorCard image="/card1.png" />
            </Col>
            <Col className="gutter-row" span={12}>
                <SHUICard image="/card2.png" />
            </Col>
        </Row>
    </Content>

</Layout>, document.getElementById("root"));

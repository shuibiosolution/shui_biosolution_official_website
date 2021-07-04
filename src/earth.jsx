import React from "react";
import ReactDOM from "react-dom";

import "/public/stylesheets/earth.css";
import { Layout, Row, Col } from 'antd';
import SHUIMenu from "./menu.jsx";
import SHUICard from "./card.jsx";
import SHUIColorCard from "./colorCard.jsx";
<style>
    @import url('https://fonts.googleapis.com/css2?family=Long+Cang&display=swap');
</style>


const { Header, Content, Footer } = Layout;

ReactDOM.render(<Layout className="layout">

    <Header>
        {/* <div className="logo" /> */}
        <SHUIMenu />
    </Header>

    <Content>
        <Row gutter={[0, 0]}>
            <Col className="gutter-row" span={12}>
                <SHUICard image="/card11.png">
                </SHUICard>
            </Col>
            <Col className="gutter-row" span={12}>
                <SHUIColorCard style={{ backgroundColor: "#823322" }}>
                </SHUIColorCard>
            </Col>
        </Row>
        <Row gutter={[0, 0]}>
            <Col className="gutter-row" span={12}>
                <SHUIColorCard style={{ backgroundColor: "#823322" }}>
                </SHUIColorCard>
            </Col>
            <Col className="gutter-row" span={12}>
                <SHUICard image="/card12.png">
                </SHUICard>
            </Col>
        </Row>
        <Row gutter={[0, 0]}>
            <Col className="gutter-row" span={12}>
                <SHUICard image="/card13.png">
                </SHUICard>
            </Col>
            <Col className="gutter-row" span={12}>
                <SHUIColorCard style={{ backgroundColor: "#823322" }}>
                </SHUIColorCard>
            </Col>
        </Row>
    </Content>

</Layout>, document.getElementById("root"));

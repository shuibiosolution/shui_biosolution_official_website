import React from "react";
import ReactDOM from "react-dom";

import "/public/stylesheets/about.css";
import { Layout, Row, Col } from 'antd';
import SHUIMenu from "./menu.jsx";
import SHUICard from "./card.jsx";
import SHUIColorCard from "./colorCard.jsx";


const { Header, Content, Footer } = Layout;

ReactDOM.render(<Layout className="layout">

    <Header>
        {/* <div className="logo" /> */}
        <SHUIMenu />
    </Header>

    <Content>
        <SHUICard image="/title6.png">
            <div><img src="/title4.png" className="title-text" /></div>
        </SHUICard>
        <SHUIColorCard style={{ backgroundColor: "#E5E5E5" }}>
            <div id="card1">
                <p className="big-text">我们的团队</p>
            </div>
        </SHUIColorCard>
        <SHUIColorCard style={{ backgroundColor: "#E5E5E5" }}>
            <div id="card1">
                <p className="big-text">Placeholder</p>
            </div>
            <Row gutter={[0, 0]}>
                <Col className="gutter-row" span={12}>
                    1
                </Col>
                <Col className="gutter-row" span={12}>
                    2
                </Col>
            </Row>
            <Row gutter={[0, 0]}>
                <Col className="gutter-row" span={12}>
                    3
                </Col>
                <Col className="gutter-row" span={12}>
                    4
                </Col>
            </Row>
        </SHUIColorCard>
    </Content>

</Layout>, document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom";

import "/public/stylesheets/index.css";
import { Layout, Row, Col, Divider } from 'antd';
import SHUIMenu from "./menu.jsx";
import SHUICarousel from "./carousel.jsx";
import SHUIWhiteFrame from "./white-frame.jsx";
import SHUICard from "./card.jsx";

const { Header, Content, Footer } = Layout;

ReactDOM.render(<Layout className="layout">

    <Header className="header">
        {/* <div className="logo" /> */}
        <SHUIMenu />
    </Header>

    <Content>
        <SHUICarousel />
        <SHUIWhiteFrame>
            <h1 className="white-frame1-text">创造一个零污染的世界</h1>
        </SHUIWhiteFrame>
        <Row gutter={[0, 0]}>
            <Col className="gutter-row" span={8}>
                <SHUICard image="/card1.png">
                    <div id="test"><h1>test</h1></div>
                </SHUICard>
            </Col>
            <Col className="gutter-row" span={8}>
                <SHUICard image="/card2.png">
                    
                </SHUICard>
            </Col>
            <Col className="gutter-row" span={8}>
                <SHUICard image="/card3.png">
                </SHUICard>
            </Col>
        </Row>
        <SHUIWhiteFrame>
            <h1 className="white-frame2-text1">我们的愿景</h1>
            <hr className="white-frame2-hr" />
            <h1 className="white-frame2-text2">保护环境和人类健康</h1>
        </SHUIWhiteFrame>
        <Row gutter={[0, 0]}>
            <Col className="gutter-row" span={12}>
                <SHUICard image="/card4.png">
                </SHUICard>
            </Col>
            <Col className="gutter-row" span={12}>
                <SHUICard image="/card5.png">
                </SHUICard>
            </Col>
        </Row>
        <SHUICard image="/card6.png" />
        <SHUICard image="/card7.png" />
    </Content>

</Layout>, document.getElementById("root"));

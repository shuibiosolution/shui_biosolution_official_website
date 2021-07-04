import React from "react";
import ReactDOM from "react-dom";

import "/public/stylesheets/index.css";
import { Layout, Row, Col, Divider } from 'antd';
import SHUIMenu from "./menu.jsx";
import SHUICarousel from "./carousel.jsx";
import SHUIWhiteFrame from "./whiteFrame.jsx";
import SHUICard from "./card.jsx";
<style>
    @import url('https://fonts.googleapis.com/css2?family=Long+Cang&display=swap');
</style>

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
                    <div id="card1">
                        <p>我们相信生物技术是</p>
                        <p>解决世界环保问题的钥匙</p>
                        <p>大自然创造万物的同时</p>
                        <p>万物也孕育着治愈自然的能力</p>
                    </div>
                </SHUICard>
            </Col>
            <Col className="gutter-row" span={8}>
                <SHUICard image="/card2.png">
                    <div id="card2">
                        <p>我们是一家成立于2020年的</p>
                        <p>合成生物学科技企业</p>
                        <p>我们利用生物合成与计算科学</p>
                        <p>开发解决环境污染的新技术</p>
                    </div>
                </SHUICard>
            </Col>
            <Col className="gutter-row" span={8}>
                <SHUICard image="/card3.png">
                    <div id="card3">
                        <p>前沿的合成材料</p>
                        <p>与创新性的生物工程菌</p>
                        <p>系统结合</p>
                        <p>将为环境治理提供一个</p>
                        <p>革命性的新维度</p>
                    </div>
                </SHUICard>
            </Col>
        </Row>
        <SHUIWhiteFrame>
            <h1 className="white-frame2-text1">我们的愿景</h1>
            <hr className="white-frame2-hr" />
            <h2 className="white-frame2-text2">保护环境和人类健康</h2>
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

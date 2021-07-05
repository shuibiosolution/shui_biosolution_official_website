import React from "react";
import ReactDOM from "react-dom";

import "/public/stylesheets/index.css";
import { Layout, Row, Col, Collapse } from 'antd';
import SHUIMenu from "./menu.jsx";
import SHUICarousel from "./carousel.jsx";
import SHUIWhiteFrame from "./whiteFrame.jsx";
import SHUICard from "./card.jsx";
<style>
    @import url('https://fonts.googleapis.com/css2?family=Long+Cang&display=swap');
</style>

const { Header, Content, Footer } = Layout;

const { Panel } = Collapse;

ReactDOM.render(<Layout className="layout">

    <Header>
        {/* <div className="logo" /> */}
        <SHUIMenu />
    </Header>

    <Content>
        <SHUICarousel />
        <SHUIWhiteFrame>
            <p className="white-frame1-text">创造一个零污染的世界</p>
        </SHUIWhiteFrame>
        <Row gutter={[0, 0]}>
            <Col className="gutter-row" span={8}>
                <SHUICard image="/card1.png">
                    <div id="card1">
                        <p>我们相信<span id="em1">生物技术</span>是</p>
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
                        <p><span id="em2">合成生物学科技企业</span></p>
                        <p>我们利用生物合成与计算科学</p>
                        <p>开发解决环境污染的新技术</p>
                    </div>
                </SHUICard>
            </Col>
            <Col className="gutter-row" span={8}>
                <SHUICard image="/card3.png">
                    <div id="card3">
                        <p>前沿的合成材料</p>
                        <p>与创新性的<span id="em3">生物工程菌</span></p>
                        <p>系统结合</p>
                        <p>将为环境治理提供一个</p>
                        <p>革命性的新维度</p>
                    </div>
                </SHUICard>
            </Col>
        </Row>
        <SHUIWhiteFrame>
            <p className="white-frame2-text1">我们的愿景</p>
            <hr className="white-frame2-hr" />
            <p className="white-frame2-text2">保护环境和人类健康</p>
        </SHUIWhiteFrame>
        <Row gutter={[0, 0]}>
            <Col className="gutter-row" span={12}>
                <SHUICard image="/card4.png">
                    <div id="card4">
                        <p className="big-text">革新水污染处理</p>
                        <hr className="short-hr" />
                        <p className="small-text">工业微生物将替代</p>
                        <p className="small-text">传统的高耗能的污染治理</p>
                    </div>
                </SHUICard>
            </Col>
            <Col className="gutter-row" span={12}>
                <SHUICard image="/card5.png">
                    <div id="card5">
                        <p className="big-text">全新的土壤治理</p>
                        <hr className="short-hr" />
                        <p className="small-text">改造土壤微生物</p>
                        <p className="small-text">构建检测，处理，维护一体化体系</p>
                    </div>
                </SHUICard>
            </Col>
        </Row>
        <SHUICard image="/card6.png">
            <div id="card6">
                <p className="big-text">技术</p> <br /> <br />
                <p className="medium-text">合成生物学</p>
                <p className="small-text">利用工程学的手段重新构建微生物去赋予其全新的功能。</p>
                <p className="small-text">计算机技术与生命科学技术的结合将加速工业化微生物的开发与创新。</p> <br /> <br />
                <p className="medium-text">定向进化</p>
                <p className="small-text">模拟自然选择的过程去筛选最优的功能蛋白质。</p>
                <p className="small-text">创意与理性的设计结合将不断优化我们的产品，达成最理想化的效果。</p>
            </div>
        </SHUICard>
        <SHUICard image="/card7.png">
            <div id="card7">
                <p className="big-text">常见问题</p> <br />
                <Collapse defaultActiveKey={['1']} ghost accordion="true">
                    <Panel header="This is panel header 1" key="1">
                        <p className="small-text">Placeholder</p>
                    </Panel>
                    <Panel header="This is panel header 2" key="2">
                        <p className="small-text">Placeholder</p>
                    </Panel>
                    <Panel header="This is panel header 3" key="3">
                        <p className="small-text">Placeholder</p>
                    </Panel>
                </Collapse>
            </div>
        </SHUICard>
    </Content>

</Layout>, document.getElementById("root"));

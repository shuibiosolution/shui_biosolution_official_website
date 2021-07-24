import React from "react";
import ReactDOM from "react-dom";

import "/public/stylesheets/index.css";
import { Layout, Row, Col, Collapse } from 'antd';
import SHUIMenu from "./menu.jsx";
import SHUICarousel from "./carousel.jsx";
import SHUIWhiteFrame from "./whiteFrame.jsx";
import SHUICard from "./card.jsx";
import SHUIContact from "./contact.jsx";

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
                        <a href="/water"> <img src="/learn-more.png" alt="learn more" id="water-learnmore" /> </a>
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
                        <a href="/earth"> <img src="/learn-more.png" alt="learn more" id="earth-learnmore" /> </a>
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
                    <Panel header="公司的现况如何？" key="1">
                        <p className="small-text">在BLUPHEA有限公司和北京大学生命科学学院的技术支持下，
                            我公司开发了一套MVP净水系统，有效地解决了工业废水过滤中的重金属处理问题。
                            我公司受北控水务集团（香港交易所代码：00371）的邀请，在工业环境中测试我们的产品，
                            并与其下属工厂建立企业合作关系。目前我公司已从上海科技大学TechX Academy融资15000美元，
                            从康奈尔创新基金（Cornell Innovation Fund）融资5000美元，
                            并从宾夕法尼亚大学宾威科技基金（Penn Weiss Tech Fund）融资1000美元。
                            我们当下正与奇绩创坛（原YC中国）协商30万美元的稀释性融资。
                            我公司目前正在申请核心技术专利，预计将在2021年5月中旬将迎来第一笔收益流。</p>
                        <a href=""></a>
                    </Panel>
                    <Panel header="公司对生物安全和环境安全的重视程度如何？" key="2">
                        <p className="small-text">我们高度重视对生物安全和环境安全。我公司设计了一种生物开关，
                            以确保功能性细菌只能在预定的工业条件被下激活，从而确保生物安全并防止信息泄露。
                            此外，我公司设计生产的生物膜是高度可降解的。在产品生命周期结束时，
                            它们将接受高温和紫外线处理，以确保残留物不会对环境产生负面影响。</p>
                    </Panel>
                    <Panel header="公司主要针对哪些市场和客户群体？" key="3">
                        <p className="small-text">我公司的目标市场是中国的工业废水处理市场。
                            该市场规模高达144亿美元，占全球市场份额的26.2%。仅2019年一年，
                            该市场内72592个处理设施就处理了252亿吨废水。我公司主要服务于两类客户：
                            工业园区和独立工厂。对于工业园区，我公司将多级过滤系统替换为单级的集成多层生物膜。
                            对于独立的工厂，我公司制造高度定制化的生物膜来过滤目标重金属污染物。</p>
                    </Panel>
                    <Panel header="公司的下一步规划是什么？" key="4">
                        <p className="small-text">我公司计划在<a href="http://www.chinawater.com.cn/">中国水利网</a>和
                            <a href="https://www.northstarwater.com/">北辰水处理网</a>
                            等专业废水解决方案网站推出一系列推广活动和产品演示项目。水务还计划与工业废水处理领域的龙头企业
                            建立业务合作关系和直接企业联系，其中包括北京碧水源生态环境科技有限公司（深交所代码：300070）
                            和北控水务集团（香港交易所代码：00371）。从长远角度，我公司计划与上述业内领先公司进行工业试验，
                            从而建立产品信誉，提升品牌声誉。</p>
                    </Panel>
                </Collapse>
            </div>
        </SHUICard>
        <SHUIContact id="contact" />
    </Content>

</Layout>, document.getElementById("root"));

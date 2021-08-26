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
                        <p>与创新性的<span id="em3">生物工程菌</span>系统结合</p>
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
                    <Panel header="公司的历史和现状？" key="1">
                        <p className="small-text">公司成立于2020年3月份，从最开始的三位创始人，发展到十三人的团队。
                            公司核心团队曾获得2019年和2020年国际基因工程大赛（iGEM）全球金奖，
                            并作为2020年中国大陆唯一队伍参加官方科技创新孵化器。
                            目前公司的地址分别在北京中关村生命科学园和美国康奈尔大学 Mennen Hall。
                            公司开发了一套 MVP 阶段的工业废水净化系统，并完成了实验室阶段的验证，
                            受到了北控水务集团（香港交易所代码：00371）的邀请，在其背景工业污水处理厂进行工业化验证，
                            并与国内合成生物学领先初创公司蓝晶微生物、北京大学前言交叉学科研究院欧阳颀实验室成员、
                            国内最大的科技青年社群 X Academy、康奈尔大学 ilana lauren brito 教授实验室有着深度的合作。
                            在2021年秋季，我们公司的核心目前在于水处理产品得进一步优化和小规模发酵验证，
                            以及土壤修复产品的MVP阶段研发。目前正在申请技术的中国和国际的核心专利。</p>
                        <a href=""></a>
                    </Panel>
                    <Panel header="公司的现金流、盈利、和融资情况？" key="2">
                        <p className="small-text">公司参加了原 TechX Academy 的 X Fusor 孵化项目，
                            并获得了来自孵化器前期对于实验，公司运营，商业化发展的经费支持。
                            此外，公司的创始成员分别申请到了来自美国康奈尔大学企业家协会和创新基金，
                            宾夕法尼亚大学 Weiss Tech House，沃顿商学院等的数千美金的学生项目支持经费，
                            以及学术和商业导师的人脉资源。此外，目前，公司的核心产品在MVP阶段，
                            并且2021年秋季的商业订单将产生超过200,000人民币的收入。计划在2022年春季，等待运营团队，
                            学术研发团队和商业产品进一步成熟后，公司将寻找天使轮投资，并已经与奇绩创坛、
                            华岩资本、华创资本、明势资本、源基金等投资机构有初步接触。</p>
                    </Panel>
                    <Panel header="公司主要针对哪些市场和客户群体？" key="3">
                        <p className="small-text">我公司的目标市场是中国的工业废水处理市场。
                            该市场规模高达144亿美元，占全球市场份额的26.2%。仅2019年一年，
                            该市场内72592个处理设施就处理了252亿吨废水。我公司主要服务于两类客户：
                            工业园区和独立工厂。对于工业园区，我公司将多级过滤系统替换为单级的集成多层生物膜。
                            对于独立的工厂，我公司制造高度定制化的生物膜来过滤目标重金属污染物。</p>
                    </Panel>
                    <Panel header="三个本科生的创业团队靠谱吗？" key="4">
                        <p className="small-text">
                            我们三位核心创始人高中毕业于中国顶尖高中北京四中，并在本科去往美国TOP10的康奈尔大学，
                            宾夕法尼亚大学，加州伯克利大学进行进修。其中CEO徐明阳入围了一届只录取30名学生的科技与人文荣誉项目，
                            CFO高宇轩是宾大Jerome Fisher M&T 荣誉项目，全球只录取50人的成员，CTO倪赫远是美国奥林匹克竞赛中国区冠军。
                            <br />
                            此外，我们有着很强的专家团队和机构的支持。我们的商业专家顾问是国际公民资本创始人兼职CEO和前德意志银行副总Kenneth Kwok，
                            也是团队创业初期的iGEM创业营地的mentor。科学和产业专家团队有康奈尔大学副教授,
                            生物工程院Mong Family Sesquicentennial Faculty Fellow的Ilana Lauren Brito、
                            纽卡斯尔大学环境工程学院正教授Tom Curtis。我们的产品专家是英国皇家技术制造与商业学会院士,
                            英国皇家生物学会院士，牛津大学工程学院教授, St Edmund Hall荣誉院士的Ian Thompson。
                            <br />
                            此外，我们还受到了全球公民基金（Global Citizen Capital）和国际基因工程大赛组委会和创新创业委员会的可持续发展支持。
                            北京大学前言交叉学科研究院欧阳颀实验室成员、北京蓝晶微生物科技有限公司成员（国内合成生物学领军初创企业）
                            和康奈尔大学ilana lauren brito教授实验室成员的学术支持。</p>
                    </Panel>
                </Collapse>
            </div>
        </SHUICard>
        <SHUIContact id="contact" />
    </Content>

</Layout>, document.getElementById("root"));

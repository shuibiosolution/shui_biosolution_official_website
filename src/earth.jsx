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
                    <div className="card11-item">
                        <img src="/title5.png" alt="SHUI logo" id="logo" />
                    </div>
                    <div className="card11-item" >
                        <em>土壤治理</em>
                    </div>
                    <div className="card11-item">
                        <br /><br /><br />
                        <hr />
                        <ul>
                            <li>
                                <img src="/19black.png" alt="19 %" />
                                <p>在中国，19% 的耕地有不同程度的重金属污染</p>
                            </li>
                            <li>
                                <img src="/60black.png" alt="60 %" />
                                <p>60% 的重金属污染的土壤需要超过 100 年时间才能够恢复</p>
                            </li>
                        </ul>
                    </div>
                    <div className="card11-item" id="card11-text">
                        <p>2016 年，中国政府颁布了《土壤污染防治行动计划》，极大的推动了土壤处理技术市场的发展。</p>
                    </div>

                </SHUIColorCard>
            </Col>
        </Row>
        <Row gutter={[0, 0]}>
            <Col className="gutter-row" span={12}>
                <SHUIColorCard style={{ backgroundColor: "#823322" }}>
                    <div id="card12-text">
                        <p>根据联合国粮食及农业组织的报告，95% 的粮食直接或间接来自于土壤。</p>
                        <br />
                        <p>健康的土壤对于粮食安全和健康至关重要。土壤污染会引发连锁反应，
                            污染物会在土壤组织中积累，进入到食草动物，鸟类和人类身体中。
                            与此同时，土壤污染也会渗透到地下水中，部分也会成为温室气体排放。</p>
                        <br />
                        <p>目前普遍的土壤污染解决方案是最基础的填埋和转移，其本身无法解决已经污染的土壤。</p>
                    </div>
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
                    <div id="card13-text">
                        <p>与传统土壤治理产业相比，经过工程化设计的微生物可以有效的收集和集中处理污染物，
                            部分污染物可以作为<em>【养分】</em>去提供可持续的清洁服务。 </p>
                        <br />
                        <p>微生物技术不但解决了传统污染处理技术治标不治本的硬伤，并可以有效的通过集中
                            生产来<em>降低成本</em>。微生物产物的易生产和降解性将会是一种<em>高效</em>
                            和<em>可持续</em>的现代土壤处理技术。</p>
                        <br />
                        <p>SHUI 将关注<em>农业用地，工业用地，城市用地</em>和<em>环境用地</em>四大领域，
                            并将于头部企业和当地政府积极合作去提供绿色可持续的土壤处理服务。
                            目前，我们正积极改善中国地区的农业土壤污染问题；开发检测、治理、维护一体化的土壤处理体系。
                        </p>
                    </div>
                </SHUIColorCard>
            </Col>
        </Row>
    </Content>

</Layout>, document.getElementById("root"));

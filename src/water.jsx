import React from "react";
import ReactDOM from "react-dom";

import "/public/stylesheets/water.css";
import { Layout, Row, Col } from 'antd';
import SHUIMenu from "./menu.jsx";
import SHUICard from "./card.jsx";
import SHUIColorCard from "./colorCard.jsx";
import SHUIContact from "./contact.jsx";
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
                <SHUICard image="/card8.png">
                </SHUICard>
            </Col>
            <Col className="gutter-row" span={12}>
                <SHUIColorCard style={{ backgroundColor: "#112137" }}>
                    <div className="card8-item">
                        <img src="/title4.png" alt="SHUI logo" id="logo" />
                    </div>
                    <div className="card8-item" >
                        <em>水污染治理</em>
                    </div>
                    <div className="card8-item">
                        <br /><br /><br />
                        <hr />
                        <ul className="stats">
                            <li>
                                <img src="/30red.png" alt="30 %" span={2} />
                                <p>目前，全球 1/3 的人无法获得安全健康的直饮水</p>
                            </li>
                            <li>
                                <img src="/60red.png" alt="60 %" />
                                <p>60% 的人生活在缺乏足够净水设备的条件下</p>
                            </li>
                            <li>
                                <img src="/20ppl.png" alt="1000 children" />
                                <p>每天有将近 1000 个儿童因为水污染和引起的相关疾病而死去。</p>
                            </li>
                        </ul>
                    </div>

                </SHUIColorCard>
            </Col>
        </Row>
        <Row gutter={[0, 0]}>
            <Col className="gutter-row" span={12}>
                <SHUIColorCard style={{ backgroundColor: "#112137" }}>
                    <div id="card9-text">
                        <p>根据联合国官方的数据，全球 80% 的废水是因为人类排放没有经过有效处理的废水进入河流和海洋。</p>
                        <br />
                        <p>随着人类工业和社会的不断发展，目前的水处理设备是无法解决不断加剧的水治理和污染问题。</p>
                        <br />
                        <p>与此同时，昂贵的更换净水设备的固定成本，让多达 50% 的工厂用着超过十年的陈旧低效高耗能的污水处理设备</p>
                    </div>
                </SHUIColorCard>
            </Col>
            <Col className="gutter-row" span={12}>
                <SHUICard image="/card9.png">
                </SHUICard>
            </Col>
        </Row>
        <Row gutter={[0, 0]}>
            <Col className="gutter-row" span={12}>
                <SHUICard image="/card10.png">
                </SHUICard>
            </Col>
            <Col className="gutter-row" span={12}>
                <SHUIColorCard style={{ backgroundColor: "#112137" }}>
                    <div id="card10-text">
                        <p>与传统水治理产业相比，微生物可以大规模集中化低成本的生产，
                            并且工业化的设计原理也能够为不同的污染水体提供<em>定制化</em>的清洁服务。 </p>
                        <br />
                        <p>直接从微生物细胞中生产生物膜和生物菌，不仅<em>压缩</em>了原本物理生产的<em>供应链长度</em>，<em>减少</em>了生产、
                            损耗和运输的<em>成本</em>和<em>安全风险</em>。微生物产物的易生产和降解性将会是一种高效和可持续的现代水处理技术。</p>
                        <br />
                        <p>SHUI 将关注<em>农业污水，城市污水，工业污水，环境污水</em> 四大领域，
                            并将与相关企业和当地政府合作来提供绿色可持续的水净化服务。目前，我们正积极改善中国地区的工业废水处理。</p>
                    </div>
                </SHUIColorCard>
            </Col>
        </Row>
        <SHUIContact />
    </Content>

</Layout>, document.getElementById("root"));

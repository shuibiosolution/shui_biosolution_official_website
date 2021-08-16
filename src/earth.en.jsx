/*
Soil remediation
Over 75% of the land area on earth is degraded
Some 3.2 billion people worldwide are negatively affected by contaminated land
60% of the heavy-metal contaminated soil needs more than 100 years to remediate

According to the Food and Agriculture Organization of the United Nations, 95% of food comes directly or indirectly from soil.
Healthy soils are essential for food security and human health. Soil pollution can trigger a chain reaction in which pollutants accumulate in soil and enter herbivores, birds and humans. Meanwhile, soil pollutants can penetrate into groundwater and, in part, become greenhouse gases.
The current common soil pollution solution is landfill and transfer, which in itself cannot remediate the already contaminated soil.



Compared with the traditional soil management industry, engineered microorganisms can effectively collect and centralize pollutants, some of which can be used as nutrients to provide sustainable cleaning services.

Microbial technology not only targets the root of soil pollution, but also can effectively reduce the cost by centralizing production. The easy production and degradation of microbial products will be widely adopted as an efficient and sustainable modern soil treatment technology.

Shui will focus on agricultural, urban, industrial and environmental soil remediation. We will work with peer enterprises and local governments to provide green and sustainable soil purification services.

*/

import React from "react";
import ReactDOM from "react-dom";

import "/public/stylesheets/earth.css";
import { Layout, Row, Col } from 'antd';
import SHUIMenu from "./menu.en.jsx";
import SHUICard from "./card.jsx";
import SHUIColorCard from "./colorCard.jsx";
import SHUIContact from "./contact.en.jsx";
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
            <em>Soil remediation</em>
          </div>
          <div className="card11-item">
            <br /><br /><br />
            <hr />
            <ul className="stats">
              <li>
                <img src="/75black.png" alt="19 %" />
                <p>Over 75% of the farming land area on earth is degraded</p>
              </li>
              <li>
                <img src="/60black.png" alt="60 %" />
                <p>60% of the heavy-metal contaminated soil needs more than 100 years to remediate</p>
              </li>
            </ul>
          </div>

        </SHUIColorCard>
      </Col>
    </Row>
    <Row gutter={[0, 0]}>
      <Col className="gutter-row" span={12}>
        <SHUIColorCard style={{ backgroundColor: "#823322" }}>
          <div id="card12-text-en">
            <p>According to the Food and Agriculture Organization of the United Nations, 95% of food comes directly or indirectly from soil.</p>
            <br />
            <p>Healthy soils are essential for food security and human health. Soil pollution can trigger a chain reaction in which pollutants accumulate in soil and enter herbivores, birds and humans. Meanwhile, soil pollutants can penetrate into groundwater and, in part, become greenhouse gases.</p>
            <br />
            <p>The current common soil pollution solution is landfill and transfer, which in itself cannot remediate the already contaminated soil.</p>
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
          <div id="card13-text-en">
            <p>Compared with the traditional soil management industry, engineered microorganisms can effectively collect and centralize pollutants, some of which can be used as nutrients to provide sustainable cleaning services.</p>
            <br />
            <p>Microbial technology not only targets the root of soil pollution, but also can effectively reduce the cost by centralizing production. The easy production and degradation of microbial products will be widely adopted as an efficient and sustainable modern soil treatment technology.</p>
            <br />
            <p>Shui will focus on agricultural, urban, industrial and environmental soil remediation. We will work with peer enterprises and local governments to provide green and sustainable soil purification services.
            </p>
          </div>
        </SHUIColorCard>
      </Col>
    </Row>
    <SHUIContact />
  </Content>

</Layout>, document.getElementById("root"));

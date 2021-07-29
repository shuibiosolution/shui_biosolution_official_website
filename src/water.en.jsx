/*

Wastewater treatment

1 in 3 people globally do not have access to safe drinking water
60% of the world live in water stressed areas
Every day, 1,000 children die from illnesses caused by dirty water and unhygienic living conditions


According to the United Nations, 80% of the world's wastewater is discharged  into rivers and oceans without effective treatment.

The ever-developing human industries and societies impose greater demands on wastewater treatment, which the current treatment system cannot suffice.

Meanwhile, the cost of equipment replacement is so high that half of factories still chose to use inefficient and energy-consuming wastewater treatment systems that are more than a decade old


Unlike the traditional wastewater treatment industry, microorganisms can be produced at large-scale and low-cost. Its industrialized design concept also allows for highly customizable purification services for different water bodies.

We produce biofilms and bacteria directly from microbial cells, which shortens the supply chain, reduces the cost of production and transportation, and eliminates safety risks. The easy production and degradability of microbial products will be widely adopted as an efficient and sustainable modern water treatment technology.

Shui will focus on agricultural, urban, industrial and environmental wastewater treatment. We will work with peer enterprises and local governments to provide green and sustainable water purification services.

*/

import React from "react";
import ReactDOM from "react-dom";

import "/public/stylesheets/water.css";
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
        <SHUICard image="/card8.png">
        </SHUICard>
      </Col>
      <Col className="gutter-row" span={12}>
        <SHUIColorCard style={{ backgroundColor: "#112137" }}>
          <div className="card8-item">
            <img src="/title4.png" alt="SHUI logo" id="logo" />
          </div>
          <div className="card8-item" >
            <em>Wastewater Treatment</em>
          </div>
          <div className="card8-item">
            <br /><br /><br />
            <hr />
            <ul className="stats">
              <li>
                <img src="/30red.png" alt="30 %" span={2} />
                <p>1 in 3 people globally do not have access to safe drinking water</p>
              </li>
              <li>
                <img src="/60red.png" alt="60 %" />
                <p>60% of the world live in water stressed areas</p>
              </li>
              <li>
                <img src="/20ppl.png" alt="1000 children" />
                <p>Every day, 1,000 children die from illnesses caused by dirty water and unhygienic living conditions</p>
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
            <p>According to the United Nations, 80% of the world's wastewater is discharged  into rivers and oceans without effective treatment.</p>
            <br />
            <p>The ever-developing human industries and societies impose greater demands on wastewater treatment, which the current treatment system cannot suffice.</p>
            <br />
            <p>Meanwhile, the cost of equipment replacement is so high that half of factories still chose to use inefficient and energy-consuming wastewater treatment systems that are more than a decade old.</p>
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
            <p>Unlike the traditional wastewater treatment industry, microorganisms can be produced at large-scale and low-cost. Its industrialized design concept also allows for highly customizable purification services for different water bodies.</p>
            <br />
            <p>We produce biofilms and bacteria directly from microbial cells, which shortens the supply chain, reduces the cost of production and transportation, and eliminates safety risks. The easy production and degradability of microbial products will be widely adopted as an efficient and sustainable modern water treatment technology.</p>
            <br />
            <p>Shui will focus on agricultural, urban, industrial and environmental wastewater treatment. We will work with peer enterprises and local governments to provide green and sustainable water purification services.
            </p>
          </div>
        </SHUIColorCard>
      </Col>
    </Row>
  </Content>

</Layout>, document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom";

import "/public/stylesheets/water.css";
import { Layout, Row, Col} from 'antd';
import SHUIMenu from "./menu.jsx";
import SHUICard from "./card.jsx";
import SHUIColorCard from "./colorCard.jsx";

const { Header, Content, Footer } = Layout;

ReactDOM.render(<Layout className="layout">

    <Header>
        <div className="logo" />
        <SHUIMenu />
    </Header>

    <Content>
        <Row gutter={[0, 0]}>
            <Col className="gutter-row" span={12}>
                <SHUICard image="/card8.png">
                </SHUICard>
            </Col>
            <Col className="gutter-row" span={12}>
                <SHUIColorCard style={{backgroundColor: "#112137"}}>
                </SHUIColorCard>
            </Col>
        </Row>
        <Row gutter={[0, 0]}>
            <Col className="gutter-row" span={12}>
                <SHUIColorCard style={{backgroundColor: "#112137"}}>
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
                <SHUIColorCard style={{backgroundColor: "#112137"}}>
                </SHUIColorCard>
            </Col>
        </Row>
    </Content>

</Layout>, document.getElementById("root"));

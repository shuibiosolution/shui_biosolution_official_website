import React from "react";
import ReactDOM from "react-dom";

import "/public/stylesheets/about.css";
import { Layout, Row, Col } from 'antd';
import SHUIMenu from "./menu.jsx";
import SHUICard from "./card.jsx";
import SHUIColorCard from "./colorCard.jsx";


const { Header, Content, Footer } = Layout;

ReactDOM.render(<Layout className="layout">

    <Header>
        {/* <div className="logo" /> */}
        <SHUIMenu />
    </Header>

    <Content>
        <SHUICard>
        </SHUICard>
    </Content>

</Layout>, document.getElementById("root"));

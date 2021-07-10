import React from "react";
import ReactDOM from "react-dom";

import "/public/stylesheets/about.css";
import { Layout, Row, Col } from 'antd';
import SHUIMenu from "./menu.jsx";
import SHUICard from "./card.jsx";
import SHUIColorCard from "./colorCard.jsx";
import SHUIMember from "./member.jsx";

const { Header, Content, Footer } = Layout;

// Enter details about members here
const members = [
    {
        name_title: "徐明阳 - CEO",
        image: "member1.png",
        bio: "placeholder",
        linkedin: "https://www.google.com"
    },
    {
        name_title: "高宇轩 - CFO",
        image: "member2.png",
        bio: "placeholder",
        linkedin: "https://www.google.com"
    },
    {
        name_title: "倪赫远 - CTO & Director of R&D",
        image: "member3.png",
        bio: "placeholder",
        linkedin: "https://www.google.com"
    }
];

// And details about sponsors

const sponsors = [
    {
        name: "Placeholder",
        image: "sponsor1.png",
        intro1: "placeholder",
        intro2: "placeholder",
        website: "",
        linkedin: ""
    },
    {
        name: "Placeholder",
        image: "sponsor2.png",
        intro1: "placeholder",
        intro2: "placeholder",
        website: "",
        linkedin: ""
    },
    {
        name: "Placeholder",
        image: "sponsor3.png",
        intro1: "placeholder",
        intro2: "placeholder",
        website: "",
        linkedin: ""
    },
    {
        name: "Placeholder",
        image: "sponsor4.png",
        intro1: "placeholder",
        intro2: "placeholder",
        website: "",
        linkedin: ""
    }
];

ReactDOM.render(<Layout className="layout">

    <Header>
        {/* <div className="logo" /> */}
        <SHUIMenu />
    </Header>

    <Content>
        <SHUICard image="/title6.png">
            <div><img src="/title4.png" className="title-text" /></div>
        </SHUICard>
        <SHUIColorCard style={{ backgroundColor: "#2D75EC" }}>
            <div id="card1">
                <p className="big-text">我们的团队</p>
            </div>
            {/* Could use a map function or a for-loop here but I forgot how */}
            <SHUIMember name_title={members[0].name_title} image={members[0].image} bio={members[0].bio} linkedin={members[0].linkedin} />
            <SHUIMember name_title={members[1].name_title} image={members[1].image} bio={members[1].bio} linkedin={members[1].linkedin} />
            <SHUIMember name_title={members[2].name_title} image={members[2].image} bio={members[2].bio} linkedin={members[2].linkedin} />
        </SHUIColorCard>
        <SHUIColorCard style={{ backgroundColor: "#4285F4" }}>
            <div id="card1">
                <p className="big-text">Placeholder</p>
            </div>
            <Row gutter={[0, 0]}>
                <Col className="gutter-row" span={12}>
                    1
                </Col>
                <Col className="gutter-row" span={12}>
                    2
                </Col>
            </Row>
            <Row gutter={[0, 0]}>
                <Col className="gutter-row" span={12}>
                    3
                </Col>
                <Col className="gutter-row" span={12}>
                    4
                </Col>
            </Row>
        </SHUIColorCard>
    </Content>

</Layout>, document.getElementById("root"));

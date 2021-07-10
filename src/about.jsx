import React from "react";
import ReactDOM from "react-dom";

import "/public/stylesheets/about.css";
import { Layout, Row, Col } from 'antd';
import SHUIMenu from "./menu.jsx";
import SHUICard from "./card.jsx";
import SHUIColorCard from "./colorCard.jsx";
import SHUIMember from "./member.jsx";
import SHUISponsor from "./sponsor.jsx";

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
            <div id="card2">
                <p className="big-text">Placeholder</p>
            </div>
            <Row gutter={[0, 0]}>
                <Col className="gutter-row" span={12}>
                    <SHUISponsor
                        name={sponsors[0].name} image={sponsors[0].image} intro1={sponsors[0].intro1} intro2={sponsors[0].intro2} linkedin={sponsors[0].linkedin} website={sponsors[0].website}
                    />
                </Col>
                <Col className="gutter-row" span={12}>
                <SHUISponsor
                        name={sponsors[1].name} image={sponsors[1].image} intro1={sponsors[1].intro1} intro2={sponsors[1].intro2} linkedin={sponsors[1].linkedin} website={sponsors[1].website}
                    />
                </Col>
            </Row>
            <Row gutter={[0, 0]}>
                <Col className="gutter-row" span={12}>
                <SHUISponsor
                        name={sponsors[2].name} image={sponsors[2].image} intro1={sponsors[2].intro1} intro2={sponsors[2].intro2} linkedin={sponsors[2].linkedin} website={sponsors[2].website}
                    />
                </Col>
                <Col className="gutter-row" span={12}>
                <SHUISponsor
                        name={sponsors[3].name} image={sponsors[3].image} intro1={sponsors[3].intro1} intro2={sponsors[3].intro2} linkedin={sponsors[3].linkedin} website={sponsors[3].website}
                    />
                </Col>
            </Row>
        </SHUIColorCard>
    </Content>

</Layout>, document.getElementById("root"));

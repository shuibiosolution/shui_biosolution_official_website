import { Col, Layout, Row } from 'antd';
import React from "react";
import ReactDOM from "react-dom";
import SHUICard from "./card.jsx";
import SHUIColorCard from "./colorCard.jsx";
import SHUIMember from "./member.jsx";
import SHUIMenu from "./menu.jsx";
import SHUISponsor from "./sponsor.jsx";
import "/public/stylesheets/about.css";

const { Header, Content, Footer } = Layout;

// Enter details about members here
const members = [
  {
    name_title: "Mingyang Xu  - CEO  ",
    image: "member1.png",
    bio: "B.S. Biology + Sociology @ Cornell University | Heads general logistics, marketing strategy, corporate outreach, talent acquisition, and intern training program.",
    linkedin: "https://www.linkedin.com/in/mingyang-xu-6659a3197/"
  },
  {
    name_title: "Yuxuan Gao - CFO  ",
    image: "member2.png",
    bio: "B.S. Computer Science + Finance & Business Analytics @ UPenn Wharton | Heads business strategy, financial budgeting and forecasting, fundraising, and corporate negotiations.",
    linkedin: "https://www.linkedin.com/in/michaelgyx/"
  },
  {
    name_title: "Heyuan Ni - CTO \n & Director of R&D  ",
    image: "member3.png",
    bio: "B.A. Molecular & Cellular Biology + Data Science @ UC Berkeley | Co-heads product development and laboratory operations; Heads data analytics and general technology developments.",
    linkedin: "https://www.linkedin.com/in/michael-ni/"
  }
];

// And details about sponsors

const sponsors = [
  {
    name: "Tech X Academy  ",
    image: "sponsor1.png",
    intro1: "Investor, R&D Support",
    intro2: "Based in Shanghai, TechX is one of China's most prestigious technology summer institutes, annually hosting over 200 high school/college students who aspire to become engineers, entrepreneurs, and designers. Many of our participants successfully entered top-tier STEM undergraduate programs or Silicon Valley Giants.",
    website: "https://xacademy.cc/",
    linkedin: "https://www.linkedin.com/school/x-academy-cn/"
  },
  {
    name: "Penn Weiss Tech House  ",
    image: "sponsor2.png",
    intro1: "Investor, Scale Advisor",
    intro2: "The Weiss Tech House is a student-run hub of technological innovation at the University of Pennsylvania. Weiss Tech House encourages and supports students in the creation, development, and commercialization of innovative technologies.",
    website: "https://global.upenn.edu/global/person/weiss-tech-house",
    linkedin: "https://www.linkedin.com/company/weisstech/"
  },
  {
    name: "Global Citizen Capital ",
    image: "sponsor3.png",
    intro1: "SDG Advisor",
    intro2: "Always on the hunt for exciting new products and technologies that contribute to sustainable living, whether it be a better quality of life or a stress-reduced way of living, to help Earth continue to be a hospitable home for generations to come.",
    website: "https://www.globalcitizencap.com/",
    linkedin: "https://www.linkedin.com/company/global-citizen-capital/"
  },
  {
    name: "Penn Venture Lab  ",
    image: "sponsor4.png",
    intro1: "General Advisor",
    intro2: "Maximizes the ability of Penn students and alumni to address important challenges through entrepreneurship and entrepreneurial thinking.",
    website: "https://entrepreneurship.wharton.upenn.edu/",
    linkedin: "https://www.linkedin.com/company/vntrlab/"
  }
];

ReactDOM.render(<Layout className="layout">

  <Header>
    {/* <div className="logo" /> */}
    <SHUIMenu />
  </Header>

  <Content>
    <SHUICard image="/title6.png">
      <div>
        <img src="/title4.png" className="title-text" />
        <p className="title-text" id="ch-text">创造可持续发展的未来</p>
        <p className="title-text" id="en-text">We Build A Sustainable Future</p>
        <a href="https://youtu.be/yA52GuD8vyE"> <img src="/playButton.png" alt="play button" className="title-text" id="play-button" /></a>
      </div>
    </SHUICard>
    <SHUIColorCard style={{ backgroundColor: "#2D75EC" }}>
      <div id="card1">
        <p className="big-text">Our Team</p>
      </div>
      {/* Could use a map function or a for-loop here but I forgot how */}
      <div className="members" >
        <SHUIMember name_title={members[0].name_title} image={members[0].image} bio={members[0].bio} linkedin={members[0].linkedin} />
        <SHUIMember name_title={members[1].name_title} image={members[1].image} bio={members[1].bio} linkedin={members[1].linkedin} />
        <SHUIMember name_title={members[2].name_title} image={members[2].image} bio={members[2].bio} linkedin={members[2].linkedin} />
      </div>


    </SHUIColorCard>
    <SHUIColorCard style={{ backgroundColor: "#4285F4" }}>
      <div id="card2">
        <p className="big-text">Investors and Advisors</p>
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

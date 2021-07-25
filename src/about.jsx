import { Col, Layout, Row } from 'antd';
import React from "react";
import ReactDOM from "react-dom";
import SHUICard from "./card.jsx";
import SHUIColorCard from "./colorCard.jsx";
import SHUIMember from "./member.jsx";
import SHUIMenu from "./menu.jsx";
import SHUISponsor from "./sponsor.jsx";
import "/public/stylesheets/about.css";

<style>
    @import url('https://fonts.googleapis.com/css2?family=Long+Cang&display=swap');
</style>

const { Header, Content, Footer } = Layout;

// Enter details about members here
const members = [
    {
        name_title: "徐明阳 - CEO  ",
        image: "member1.png",
        bio: "康奈尔大学 生物学与社会学理学士 | 负责组织工作、营销策略、企业外联、人才招聘和实习生培训计划。",
        linkedin: "https://www.linkedin.com/in/mingyang-xu-6659a3197/"
    },
    {
        name_title: "高宇轩 - CFO  ",
        image: "member2.png",
        bio: "宾夕法尼亚大学沃顿商学院 计算机，财务和商业分析理学士 | 负责商业战略、财务预算、资金筹措和公司谈判。",
        linkedin: "https://www.linkedin.com/in/michaelgyx/"
    },
    {
        name_title: "倪赫远 - CTO \n & Director of R&D  ",
        image: "member3.png",
        bio: "加州大学伯克利分校 分子和细胞生物学，数据科学文学士 | 协作负责产品开发和实验室运作；负责数据分析和通用技术开发。",
        linkedin: "https://www.linkedin.com/in/michael-ni/"
    }
];

// And details about sponsors

const sponsors = [
    {
        name: "上海 Tech X 夏令营  ",
        image: "sponsor1.png",
        intro1: "投资方，研发支持",
        intro2: "上海 Tech X 是中国最负盛名的科技夏令营之一，每年接待超过200名立志成为工程师、企业家和设计师的高中生与大学生。本项目的许多参与者成功进入顶级高等院校和硅谷领头企业。",
        website: "https://xacademy.cc/",
        linkedin: "https://www.linkedin.com/school/x-academy-cn/"
    },
    {
        name: "宾夕法尼亚大学韦斯科技学院  ",
        image: "sponsor2.png",
        intro1: "投资方，规模顾问",
        intro2: "韦斯科技学院是宾夕法尼亚大学学生技术创新中心。韦斯科技学院鼓励和支持学生对创新性技术的创造、发展和商业化。",
        website: "https://global.upenn.edu/global/person/weiss-tech-house",
        linkedin: "https://www.linkedin.com/company/weisstech/"
    },
    {
        name: "世界公民资本（Global Citizen Capital） ",
        image: "sponsor3.png",
        intro1: "可持续发展目标（SDG）顾问",
        intro2: "Global Citizen Capital 致力于寻找新的产品和技术来改善可持续生活方式，提高生活质量，减少生活压力，使未来的地球成为美丽的家园。",
        website: "https://www.globalcitizencap.com/",
        linkedin: "https://www.linkedin.com/company/global-citizen-capital/"
    },
    {
        name: "宾夕法尼亚大学创业实验室  ",
        image: "sponsor4.png",
        intro1: "总顾问",
        intro2: "培养学生与校友的创业精神和创业思维，最大限度地提高其迎接重大挑战的能力。",
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
                <p className="big-text">我们的团队</p>
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
                <p className="big-text">投资方与顾问</p>
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

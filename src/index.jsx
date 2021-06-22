import React from "react";
import ReactDOM from "react-dom";

import { Layout } from 'antd';
import SHUIMenu from "./menu.jsx";
import SHUICarousel from "./carousel.jsx";

ReactDOM.render(<Layout className="layout">
    <SHUIMenu />
    <SHUICarousel />
</Layout>, document.getElementById("root"));
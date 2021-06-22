import React from "react";
import ReactDOM from "react-dom";

import { Layout } from 'antd';
import SHUIMenu from "./menu.jsx";

ReactDOM.render(<Layout className="layout">
    <SHUIMenu />
</Layout>, document.getElementById("root"));
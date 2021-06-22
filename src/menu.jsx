import React from "react";
import { Header, Menu } from 'antd';
import 'antd/dist/antd.css';
import "/public/stylesheets/menu.css"

class SHUIMenu extends React.Component {
    state = {
        current: '',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
    };

    render() {
        const { current } = this.state;
        return (
            <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" className="menu">
                <Menu.Item key="menu-index" className="menu-item-right">
                    <p className="menu-text">首页</p>
                </Menu.Item>
                <Menu.Item key="menu-water" className="menu-item-right">
                    <p className="menu-text">水污染治理</p>
                </Menu.Item>
                <Menu.Item key="menu-earth" className="menu-item-right">
                    <p className="menu-text">土壤治理</p>
                </Menu.Item>
                <Menu.Item key="menu-tech" className="menu-item-right">
                    <p className="menu-text">技术</p>
                </Menu.Item>
                <Menu.Item key="menu-about" className="menu-item-right">
                    <p className="menu-text">关于我们</p>
                </Menu.Item>
            </Menu>
        );
    }
}

export default SHUIMenu;
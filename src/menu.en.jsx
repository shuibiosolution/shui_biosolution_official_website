import React from "react";
import { Menu } from 'antd';
import 'antd/dist/antd.css';
import "/public/stylesheets/menu.css"

class SHUIMenu extends React.Component {
  // Actually this would work better in TypeScript
  state = {
    current: '',
  };

  handleClick = (e) => {
    e.preventDefault();
    console.log("Click " + e);
  };

  render() {
    const { current } = this.state;
    return (
      <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" className="menu">
        <a href="/en"><Menu.Item key="menu-icon" className="menu-item-left">
          <img src="/logo.png" alt="SHUI" className="icon" />
        </Menu.Item></a>
        <a href="/en"><Menu.Item key="menu-index" className="menu-item-right">
          <p className="menu-text">Home</p>
        </Menu.Item></a>
        <a href="/water.en"><Menu.Item key="menu-water" className="menu-item-right">
          <p className="menu-text">Wastewater Treatment</p>
        </Menu.Item></a>
        <a href="/earth.en"><Menu.Item key="menu-earth" className="menu-item-right">
          <p className="menu-text">Soil Remediation</p>
        </Menu.Item></a>
        <a href="/about.en"><Menu.Item key="menu-about" className="menu-item-right">
          <p className="menu-text">About Us</p>
        </Menu.Item></a>
        <a href="/"><Menu.Item key="menu-lang" className="menu-item-right">
          <p className="menu-text">中文/English</p>
        </Menu.Item></a>
      </Menu>
    );
  }
}

export default SHUIMenu;
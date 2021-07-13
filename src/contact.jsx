import React, { Component } from "react";
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import "/public/stylesheets/contact.css"
import axios from "axios";

class SHUIContact extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "姓名",
            email: "邮箱",
            subject: "主题",
            message: "信息"
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios.post("http://localhost:3000/contact", this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {

        const { name, email, subject, message } = this.state;

        return (
            <Row>
                <Col className="gutter-row" span={12}>
                    <form onSubmit={this.submitHandler}>
                        <input type="text" name="name" value={name} onChange={this.changeHandler} />
                        <input type="text" name="email" value={email} onChange={this.changeHandler} /><br />
                        <input type="text" name="subject" value={subject} onChange={this.changeHandler} /><br />
                        <input type="text" name="message" value={message} onChange={this.changeHandler} />
                        <input type="submit" value="submit" />
                    </form>
                </Col>
                <Col className="gutter-row" span={12}>
                    <p className="big-text-contact blue-color">联系我们 & 加入我们</p>
                    <p className="medium-text-contact blue-color">公司邮箱：</p>
                    <p className="medium-text-contact blue-color">公司地址：</p>
                    <a href="https://www.linkedin.com/company/shui-biosolution-technologies-llc/" target="_blank"><img src="linkedin.png" /></a>
                </Col>
            </Row>
        )
    }
}

export default SHUIContact;
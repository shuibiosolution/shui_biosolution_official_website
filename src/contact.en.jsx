import React, { useState } from "react";
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import "/public/stylesheets/contact.css"
import axios from "axios";

function StatusMessage(status) {
    switch (status) {
        case 0:
            return (<p className='medium-text-contact black-color'></p>);
        case 1:
            return (<p className='medium-text-contact black-color'>Unexpected error. Please check if you have empty items in the form.</p>);
        case 2:
            return (<p className='medium-text-contact black-color'>Message sent!</p>);
        default:
            return null;
    }
}

function SHUIContact() {

    const [status, setStatus] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    return (
        <Row>
            <Col className="gutter-row" span={12}>
                <form onSubmit={submitHandler}>
                    <input value={name} type="text" placeholder="Name" name="name" onChange={changeHandler} /><br />
                    <input value={email} type="email" placeholder="Email" name="email" onChange={changeHandler} /><br />
                    <input value={subject} type="text" placeholder="Subject" name="subject" onChange={changeHandler} /><br />
                    <textarea value={message} type="text" placeholder="Message" name="message" onChange={changeHandler} cols="30" rows="10" ></textarea><br />
                    <input type="submit" />
                </form>
                {StatusMessage(status)}
            </Col>
            <Col className="gutter-row" span={12}>
                <p className="big-text-contact blue-color">Contact Us & Join Us</p>
                <p className="medium-text-contact blue-color">Email：shuibiosolution@gmail.com</p>
                <p className="medium-text-contact blue-color">Address: Beijing, China</p>
                <a href="https://www.linkedin.com/company/shui-biosolution-technologies-llc/" target="_blank"><img src="linkedin.png" id="linkedin" /></a>
            </Col>
        </Row>
    )

    function changeHandler(e) {
        console.log("Changed " + e.target.name);
        const trigger = e.target.name;
        const value = e.target.value;
        if (trigger === "name") {
            setName(value)
        }
        if (trigger === "email") {
            setEmail(value)
        }
        if (trigger === "subject") {
            setSubject(value)
        }
        if (trigger === "message") {
            setMessage(value)
        }
        // It seems that switch-case is not working
        // Might have something to do with equality check == vs === in JS
        // switch (trigger) {
        //     case "name":
        //         setName(e.target.value);
        //     case "email":
        //         setEmail(e.target.value);
        //     case "subject":
        //         setSubject(e.target.value);
        //     case "message":
        //         setMessage(e.target.value);
        //     default:
        //         return null;
        // }
    }

    async function submitHandler(e) {
        e.preventDefault();
        console.log(name, email, subject, message);
        const postMessage = {
            name: name,
            email: email,
            subject: subject,
            message: message
        }
        await axios.post(`/contact`, postMessage)
            .then(response => {
                console.log(response.data);
                changeStatusHandler(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    function changeStatusHandler(status) {
        if (status === true) {
            setStatus(2);
        }
        else {
            setStatus(1);
        }
    }
}

export default SHUIContact;

// class SHUIContact extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             name: "姓名",
//             email: "邮箱",
//             subject: "主题",
//             message: "信息",
//             // 1 = unposted; 2 = posted but failed to upload to databasel; 3 = success
//             status: 2
//         }
//     }

//     // componentDidMount() {
//     //     this.setState({timeline: this.props.initialData})
//     // }

//     changeHandler = (e) => {
//         this.setState({ [e.target.name]: e.target.value });
//     }

//     submitHandler = (e) => {
//         e.preventDefault();
//         console.log(this.state);
//         axios.post("http://localhost:3000/contact", this.state)
//             .then(response => {
//                 console.log("Sent")
//                 console.log(response)
//             })
//             .catch(error => {
//                 console.log("Error")
//             })
//     }

//     render() {

//         const { name, email, subject, message } = this.state;

//         // let showStatus1 = false;
//         // let showStatus2 = true;
//         // let showStatus3 = false;

//         // switch (status) {
//         //     case 1:
//         //         showStatus1 = true;
//         //         showStatus2 = false;
//         //         showStatus3 = false;
//         //     case 2:
//         //         showStatus2 = true;
//         //         showStatus1 = false;
//         //         showStatus3 = false;
//         //     case 3:
//         //         showStatus3 = true;
//         //         showStatus1 = false;
//         //         showStatus2 = false;
//         //     default:
//         //         break;
//         // }

//         // const status1 = <p className='medium-text black-color'></p>;
//         // const status2 = <p className='medium-text black-color'>服务器错误，请稍后重试。请检查你的消息里是否含有空白内容。</p>;
//         // const status3 = <p className='medium-text black-color'>我们已经收到了你的消息，并会尽快联系你</p>;

//         return (
//             <Row>
//                 <Col className="gutter-row" span={12}>
//                     <form onSubmit={this.submitHandler}>
//                         <input type="text" name="name" value={name} onChange={this.changeHandler} />
//                         <input type="text" name="email" value={email} onChange={this.changeHandler} /><br />
//                         <input type="text" name="subject" value={subject} onChange={this.changeHandler} /><br />
//                         <input type="text" name="message" value={message} onChange={this.changeHandler} />
//                         <input type="submit" value="submit" />
//                     </form>
//                     {/* {showStatus1 && status1}
//                     {showStatus2 && status2}
//                     {showStatus3 && status3} */}
//                 </Col>
//                 <Col className="gutter-row" span={12}>
//                     <p className="big-text-contact blue-color">联系我们 & 加入我们</p>
//                     <p className="medium-text-contact blue-color">公司邮箱：</p>
//                     <p className="medium-text-contact blue-color">公司地址：</p>
//                     <a href="https://www.linkedin.com/company/shui-biosolution-technologies-llc/" target="_blank"><img src="linkedin.png" /></a>
//                 </Col>
//             </Row>
//         )
//     }
// }
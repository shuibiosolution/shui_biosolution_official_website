
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
      return (<p className='medium-text-contact black-color'>服务器错误，请刷新后重试。请检查你的消息里是否含有空白内容。</p>);
    case 2:
      return (<p className='medium-text-contact black-color'>我们已经收到了你的消息，并会尽快联系你</p>);
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
        <p className="big-text-contact blue-color">Contact us & Join us</p>
        <p className="medium-text-contact blue-color">Email：shuibiosolution@gmail.com</p>
        <p className="medium-text-contact blue-color">Location：Beijing</p>
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
    await axios.post("http://localhost:3000/contact", postMessage)
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

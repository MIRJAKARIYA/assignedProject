import { Button, Col, Row } from "antd";
import { Layout, Typography } from "antd";
const { Footer } = Layout;
const { Title, Paragraph } = Typography;
import logo1 from "../../assets/logo1.png";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsLinkedin,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { MdLocationOn } from "react-icons/md";
import { Form, Input } from "antd";
import "./FooterContent.css";
const { TextArea } = Input;

import React, { useState } from "react";

const FooterContent = () => {
  const [hover,setHover] = useState(false);
  return (
    <Footer className="footer-extra-style">
      <img
        src={logo1}
        style={{ width: "75px", height: "90px", marginLeft: "15%" }}
        alt=""
      />
      <Row style={{ width: "70%", margin: "0 auto" }} gutter={[20, 20]}>
        <Col md={12}>
          <div>
            <Title style={{ fontFamily: "var(--rancho)" }}>
              Espresso Emporium
            </Title>

            <Paragraph style={{ fontFamily: "var(--railway)" }}>
              Always ready to be your friend. Come & Contact with us to share
              your memorable
              <br /> moments, to share with your best companion.
            </Paragraph>
            <div style={{ fontSize: "30px" }}>
              <BsFacebook></BsFacebook>
              <BsTwitter style={{ marginLeft: "20px" }}></BsTwitter>
              <BsInstagram style={{ marginLeft: "20px" }}></BsInstagram>
              <BsLinkedin style={{ marginLeft: "20px" }}></BsLinkedin>
            </div>
            <div>
              <Title style={{ fontFamily: "var(--rancho)", marginTop: "10px" }}>
                Get in Touch
              </Title>
              <div
                className="common-footer-part"
              >
                <BsFillTelephoneFill></BsFillTelephoneFill>
                <span style={{ marginLeft: "10px" }}>+88 01533 333 333</span>
              </div>
              <div
                style={{

                  marginTop: "5px",

                }}
                className="common-footer-part"
              >
                <GrMail></GrMail>
                <span style={{ marginLeft: "10px" }}>info@gmail.com</span>
              </div>
              <div
                style={{

                  marginTop: "5px",

                }}
                className="common-footer-part"
              >
                <MdLocationOn></MdLocationOn>
                <span style={{ marginLeft: "10px" }}>
                  72, Wall street, King Road, Dhaka
                </span>
              </div>
            </div>
          </div>
        </Col>
        <Col md={12}>
          <div>
            <Title style={{ fontFamily: "var(--rancho)" }}>
              Connect with Us
            </Title>
            <Form.Item>
              <Input placeholder="Name" style={{ height: "50px"}} className="input-field-footer" />
            </Form.Item>
            <Form.Item>
              <Input placeholder="Email" style={{ height: "50px" }} className="input-field-footer" />
            </Form.Item>
            <Form.Item>
              <TextArea placeholder="Message" rows={5} className="input-field-footer" />
            </Form.Item>
          </div>
          <Button className="send-message-btn">Send Message</Button>
        </Col>
      </Row>
      <div className="end-footer">Copyright Espresso Emporium ! All Rights Reserved</div>
    </Footer>
  );
};

export default FooterContent;

import { Col, Row } from 'antd';
import React from 'react';
import insta1 from "../../assets/insta/insta1.png"
import insta2 from "../../assets/insta/insta2.png"
import insta3 from "../../assets/insta/insta3.png"
import insta4 from "../../assets/insta/insta4.png"
import insta5 from "../../assets/insta/insta5.png"
import insta6 from "../../assets/insta/insta6.png"
import insta7 from "../../assets/insta/insta7.png"
import insta8 from "../../assets/insta/insta8.png"
import {Typography} from 'antd';
const { Title, Paragraph, Text } = Typography
import "./Instagram.css"

const Instagram = () => {
    return (
        <div>
        <p style={{ textAlign: "center",fontFamily:"var(--railway)" }}>Follow Us Now</p>
        <Title style={{ textAlign: "center", fontFamily: "var(--rancho)" }}>
        Follow on Instagram
        </Title>
        <Row style={{width:"70%",margin:"0 auto"}} gutter={[20,20]} className='insta-img-container'>
            <Col md={6}>
                <img src={insta1} alt="" />
            </Col>
            <Col md={6}>
            <img src={insta2} alt="" />
            </Col>
            <Col md={6}>
            <img src={insta3} alt="" />
            </Col>
            <Col md={6}>
            <img src={insta4} alt="" />
            </Col>
            <Col md={6}>
            <img src={insta5} alt="" />
            </Col>
            <Col md={6}>
            <img src={insta6} alt="" />
            </Col>
            <Col md={6}>
            <img src={insta7} alt="" />
            </Col>
            <Col md={6}>
            <img src={insta8} alt="" />
            </Col>
        </Row>
        </div>
    );
};

export default Instagram;
import React from 'react';
import "./CoffeeDetails.css";
import { useLoaderData, useNavigate } from 'react-router-dom';
import { Col, Row,Typography,Button } from 'antd';
const {Paragraph,Text,Title} = Typography;
import {AiOutlineArrowLeft} from "react-icons/ai"

const CoffeeDetails = () => {
    const {category,chef,details,img,name,price,supplier,taste}= useLoaderData()
    const navigate = useNavigate()
    return (
        <div className='coffie-container-wrapper'>
            <Button className='back-to-home-button' onClick={()=>navigate("/")}>
                <AiOutlineArrowLeft style={{color:"black"}}/>
                <Text style={{fontSize:"30px",fontFamily:"var(--rancho)",marginLeft:"5px"}}>back to home</Text>
                </Button>
            <div className='coffeeDetailsContainer'>
            <Row>
                <Col md={12}>
                    <img src={img} style={{width:"80%",margin:"0 auto",display:"block"}}  alt="" />
                </Col>
                <Col md={12} style={{display:"flex",alignItems:"center"}}>
                    <div>
                        <Title level={2} style={{marginBottom:"25px",fontFamily:"var(--rancho)"}}>Niceties</Title>
                        <Paragraph style={{fontFamily:"var(--railway)"}}>
                            <Text style={{fontFamily:"var(--railway)",fontWeight:"bold"}}>Name: </Text>{name}
                        </Paragraph>
                        <Paragraph style={{fontFamily:"var(--railway)"}}>
                            <Text style={{fontFamily:"var(--railway)",fontWeight:"bold"}}>Chef: </Text>{chef}
                        </Paragraph>
                        <Paragraph style={{fontFamily:"var(--railway)"}}>
                            <Text style={{fontFamily:"var(--railway)",fontWeight:"bold"}}>Supplier: </Text>{supplier}
                        </Paragraph>
                        <Paragraph style={{fontFamily:"var(--railway)"}}>
                            <Text style={{fontFamily:"var(--railway)",fontWeight:"bold"}}>Taste: </Text>{taste}
                        </Paragraph>
                        <Paragraph style={{fontFamily:"var(--railway)"}}>
                            <Text style={{fontFamily:"var(--railway)",fontWeight:"bold"}}>Category: </Text>{category}
                        </Paragraph>
                        <Paragraph style={{fontFamily:"var(--railway)"}}>
                            <Text style={{fontFamily:"var(--railway)",fontWeight:"bold"}}>Details: </Text>{details}
                        </Paragraph>
                        
                    </div>
                </Col>
            </Row>
        </div>
        </div>
    );
};

export default CoffeeDetails;
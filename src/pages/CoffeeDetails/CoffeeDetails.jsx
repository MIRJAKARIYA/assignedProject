import React from 'react';
import "./CoffeeDetails.css";
import { useLoaderData } from 'react-router-dom';
import { Col, Row,Typography } from 'antd';
const {Paragraph,Text,Title} = Typography;

const CoffeeDetails = () => {
    const {category,chef,details,img,name,price,supplier,taste}= useLoaderData()

    return (
        <div className='coffeeDetailsContainer'>
            <Row>
                <Col md={12}>
                    <img src={img} style={{width:"100%"}} alt="" />
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
    );
};

export default CoffeeDetails;
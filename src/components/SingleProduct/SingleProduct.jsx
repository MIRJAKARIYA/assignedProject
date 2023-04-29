import React from "react";
import "./SingleProduct.css";
import { Col, Row, Typography } from "antd";
const { Paragraph } = Typography;
import {AiFillEye} from "react-icons/ai"
import {FaPen} from "react-icons/fa"
import {MdDelete} from "react-icons/md"
import { useNavigate } from "react-router-dom";

const SingleProduct = ({deleteCoffee,product}) => {
 const {img,chef,price,name,_id} = product;
 const navigate = useNavigate()
  return (
    <Col md={12}>
        <div style={{ backgroundColor:"#eceae37c",padding:'10px',borderRadius:"10px"}}>
      <Row>
        <Col span={8}>
          <img
            src={img}
            style={{ width: "100%",height:"250px", objectFit: "cover" }}
            alt=""
          />
        </Col>
        <Col className="single-first-col" span={12}>
          <div>
            <Paragraph className="para-style"><span style={{fontWeight:"bold"}}>Name:</span> {name}</Paragraph>
            <Paragraph className="para-style" style={{marginTop:"-10px"}}><span style={{fontWeight:"bold"}}>Chef:</span> {chef}</Paragraph>
            <Paragraph className="para-style" style={{marginTop:"-10px"}}><span style={{fontWeight:"bold"}}>Price:</span> {price}</Paragraph>
          </div>
        </Col>
        <Col className="single-second-col" span={4}>
            <div style={{display:"flex",flexDirection:"column"}}>
            <div onClick={()=>navigate(`/coffeeDetails/${_id}`)} style={{backgroundColor:"#D2B48C",fontSize:"20px"}} className="icon-style">
                <AiFillEye/>
            </div>
            <div onClick={()=>navigate(`/updateCoffee/${_id}`)} style={{backgroundColor:"#3C393B",fontSize:"16px",marginTop:"12px"}} className="icon-style">
                <FaPen/>
            </div>
            <div onClick={()=>deleteCoffee(_id)} style={{backgroundColor:"#EA4744",fontSize:"20px",marginTop:"12px"}} className="icon-style">
                <MdDelete/>
            </div>
            </div>
            
        </Col>
      </Row>
    </div>
    </Col>
  );
};

export default SingleProduct;

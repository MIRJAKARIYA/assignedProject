import React from "react";
import "./SingleProduct.css";
import { Col, Row, Typography } from "antd";
import coffieMub from "../../assets/products/1.jpg";
const { Paragraph } = Typography;
import {AiFillEye} from "react-icons/ai"
import {FaPen} from "react-icons/fa"
import {MdDelete} from "react-icons/md"
import { useNavigate } from "react-router-dom";

const SingleProduct = ({product}) => {
 const {img,chef,price,name,_id} = product;
 const navigate = useNavigate()
  return (
    <Col span={12}>
        <div style={{ backgroundColor:"#eceae37c",padding:'10px',borderRadius:"10px"}}>
      <Row>
        <Col span={8}>
          <img
            src={img}
            style={{ width: "100%",height:"250px", objectFit: "cover" }}
            alt=""
          />
        </Col>
        <Col span={12} style={{ display:"flex",justifyContent:"center",alignItems:"center" }}>
          <div>
            <Paragraph style={{fontSize:"20px",fontFamily:"var(--railway)"}}><span style={{fontWeight:"bold"}}>Name:</span> {name}</Paragraph>
            <Paragraph style={{fontSize:"20px",fontFamily:"var(--railway)",marginTop:"-10px"}}><span style={{fontWeight:"bold"}}>Chef:</span> {chef}</Paragraph>
            <Paragraph style={{fontSize:"20px",fontFamily:"var(--railway)",marginTop:"-10px"}}><span style={{fontWeight:"bold"}}>Price:</span> {price}</Paragraph>
          </div>
        </Col>
        <Col style={{ display:"flex",alignItems:"center",justifyContent:"center"}} span={4}>
            <div style={{display:"flex",flexDirection:"column"}}>
            <div onClick={()=>navigate(`/coffeeDetails/${_id}`)} style={{width:"40px",height:"40px",backgroundColor:"#D2B48C",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"20px",color:"white",borderRadius:"4px"}}>
                <AiFillEye/>
            </div>
            <div style={{width:"40px",height:"40px",backgroundColor:"#3C393B",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"16px",color:"white",marginTop:"12px",borderRadius:"4px"}}>
                <FaPen/>
            </div>
            <div style={{width:"40px",height:"40px",backgroundColor:"#EA4744",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"20px",color:"white",marginTop:"12px",borderRadius:"4px"}}>
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

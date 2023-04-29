import React from "react";
import { Card, Col } from "antd";
const { Meta } = Card;
import cardImg from "../../assets/xtra/1.png";
import Paragraph from "antd/es/skeleton/Paragraph";

const Card1 = ({ aroma }) => {
  const { image, title, description } = aroma;
  return (
    <>
      <Col md={6}>
        <Card
          style={{
            width: "100%",
            maxWidth: "301px",
            backgroundColor: "transparent",
            border: "0",
            color:"black"
          }}
          cover={
            <img
              alt="example"
              src={image}
              style={{
                width: "70px",
                marginLeft: "10px",
              }}
            />
          }
        >
          <Meta
            style={{ marginLeft: "-15px",fontFamily:"var(--rancho)",fontSize:"35px"}}
            description={title}
         
          />
          <Meta
            style={{ marginLeft: "-15px",fontFamily:"var(--railway)",fontSize:"16px" }}
            description={description}
          />
          
        </Card>
      </Col>
    </>
  );
};

export default Card1;

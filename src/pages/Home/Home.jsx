import React from "react";
import { Col, Row, Typography, Button } from "antd";
const { Title, Paragraph, Text } = Typography;
import "./Home.css";
import Card1 from "../../components/Card1/Card1";
import aromaImg1 from "../../assets/xtra/1.png";
import aromaImg2 from "../../assets/xtra/2.png";
import aromaImg3 from "../../assets/xtra/3.png";
import aromaImg4 from "../../assets/xtra/4.png";
import { TbMug } from "react-icons/tb";
import SingleProduct from "../../components/SingleProduct/SingleProduct";

const Home = () => {
  const aromaData = [
    {
      image: aromaImg1,
      title: "Awesome Aroma",
      description:
        "You will definitely be a fan of the design & aroma of your coffee",
    },
    {
      image: aromaImg2,
      title: "High Quality",
      description: "We served the coffee to you maintaining the best quality",
    },
    {
      image: aromaImg3,
      title: "Pure Grades",
      description:
        "The coffee is made of the green coffee beans which you will love",
    },
    {
      image: aromaImg4,
      title: "Proper Roasting",
      description:
        "Your coffee is brewed by first roasting the green coffee beans",
    },
  ];
  return (
    <>
      {/* banner section */}
      <div className="banner-container">
        <Row className="row-style">
          <Col md={11} className="col-style"></Col>
          <Col md={13} className="col-style">
            <div>
              <Title
                style={{
                  color: "white",
                  fontFamily: "var(--rancho)",
                  fontWeight: "normal",
                  fontSize: "55px",
                }}
              >
                Would you like a Cup of Delicious Coffee?
              </Title>
              <Paragraph
                style={{
                  color: "white",
                  fontSize: "16px",
                  marginTop: "-10px",
                  fontFamily: "var(--railway)",
                }}
              >
                It's coffee time - Sip & Savor - Relaxation in every sip! Get
                the nostalgia back!! Your companion of
                <br /> every moment!!! Enjoy the beautiful moments and make them
                memorable.
              </Paragraph>

              <Button
                block
                type="primary"
                style={{
                  backgroundColor: "#E3B577",
                  borderRadius: "0",
                  width: "130px",
                  height: "48px",
                  fontFamily: "var(--rancho)",
                  color: "black",
                  fontSize: "24px",
                  marginTop: "10px",
                }}
              >
                Learn More
              </Button>
            </div>
          </Col>
        </Row>
      </div>

      {/* aroma section */}
      <div className="aroma-container">
        <Row
          style={{
            width: "70%",
            margin: "0 auto",
          }}
        >
          {aromaData.map((aroma) => (
            <Card1 aroma={aroma}></Card1>
          ))}
        </Row>
      </div>

      {/* popular products section */}
      <div className="popular-products-container">
        <p style={{ textAlign: "center" }}>--- Sip & Savor ---</p>
        <Title style={{ textAlign: "center", fontFamily: "rancho" }}>
          Our Popular Products
        </Title>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            block
            type="primary"
            style={{
              backgroundColor: "#E3B577",
              width: "130px",
              height: "48px",
              fontFamily: "var(--rancho)",
              fontSize: "20px",
              marginTop: "-8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            Add Coffee <TbMug style={{ color: "black", marginTop: "6px" }} />
          </Button>
        </div>
        <Row style={{width:"70%", margin:"0 auto"}}>
            <Col span={12}>
                <SingleProduct></SingleProduct>
            </Col>
        </Row>
      </div>
    </>
  );
};

export default Home;

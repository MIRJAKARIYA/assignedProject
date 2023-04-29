import React from "react";
import { Button, Checkbox, Col, Form, Input, Row,Typography } from "antd";
const {Paragraph,Title,Text} = Typography;
import "./AddCoffie.css"
import {AiOutlineArrowLeft} from "react-icons/ai"
import { useNavigate } from "react-router-dom";

const AddCoffie = () => {

  const navigate = useNavigate()

  const addYourCoffee = (values) => {
    console.log("Received values of form: ", values);
    const {name,details,category,chef,photo,supplier,taste} = values;
    const coffeeData = {
        name,details,category,chef,photo,supplier,taste
    }
    fetch(`http://localhost:5000/coffee`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(coffeeData),
            })
                .then((res) => res.json())
                .then((data) => {
                    alert("data added to the db")
                })
  };
  return (

    <>
    <div>
    <Button className='back-to-home-button' onClick={()=>navigate("/")}>
                <AiOutlineArrowLeft style={{color:"black"}}/>
                <Text style={{fontSize:"30px",fontFamily:"var(--rancho)",marginLeft:"5px"}}>back to home</Text>
                </Button>
        <div className="add-coffee-container">
        <Title style={{fontFamily:"var(--rancho)",textAlign:"center",marginTop:"30px"}}>Add New Coffee</Title>
        <Paragraph style={{textAlign:"center",width:"80%",margin:"0 auto",marginBottom:"20px"}}>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</Paragraph>
      <Form name="normal_login" className="login-form" onFinish={addYourCoffee}>
        <Row gutter={[30]}>
          <Col md={12}>
            <span style={{fontWeight:"bold",fontFamily:"var(--railway)"}}>Name</span>
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input the Name!",
                },
              ]}
            >
              <Input placeholder="Enter coffee name" style={{height:"48px"}} />
            </Form.Item>
            <span style={{fontWeight:"bold",fontFamily:"var(--railway)"}}>Supplier</span>
            <Form.Item
              name="supplier"
              rules={[
                {
                  required: true,
                  message: "Please input the Supplier!",
                },
              ]}
            >
              <Input placeholder="Enter coffee supplier" style={{height:"48px"}}/>
            </Form.Item>
            <span style={{fontWeight:"bold",fontFamily:"var(--railway)"}}>Category</span>
            <Form.Item
              name="category"
              rules={[
                {
                  required: true,
                  message: "Please input the category!",
                },
              ]}
            >
              <Input type="password" placeholder="Enter coffee category" style={{height:"48px"}}/>
            </Form.Item>
          </Col>
          <Col md={12}>
              <span style={{fontWeight:"bold",fontFamily:"var(--railway)"}}>Chef</span>
          <Form.Item
              name="chef"
              rules={[
                {
                  required: true,
                  message: "Please input the chef!",
                },
              ]}
            >
              <Input placeholder="Enter coffee chef" style={{height:"48px"}}/>
            </Form.Item>
            <span style={{fontWeight:"bold",fontFamily:"var(--railway)"}}>Taste</span>
            <Form.Item
              name="taste"
              rules={[
                {
                  required: true,
                  message: "Please input the Taste!",
                },
              ]}
            >
              <Input placeholder="Enter coffee taste" style={{height:"48px"}}/>
            </Form.Item>
            <span style={{fontWeight:"bold",fontFamily:"var(--railway)"}}>Details</span>
            <Form.Item
              name="details"
              rules={[
                {
                  required: true,
                  message: "Please input details!",
                },
              ]}
            >
              <Input placeholder="Enter coffee details" style={{height:"48px"}}/>
            </Form.Item>

          </Col>
        </Row>
        <span style={{fontWeight:"bold",fontFamily:"var(--railway)"}}>Photo</span>
        <Form.Item
              name="photo"
              rules={[
                {
                  required: true,
                  message: "Please input photo!",
                },
              ]}
            >
              <Input placeholder="Enter coffee photo" style={{height:"48px"}}/>
            </Form.Item>
        <Form.Item>
          <Button
            block
            type="primary"
            htmlType="submit"
            className="login-form-button"
            style={{height:"56px",fontFamily:"var(--rancho)",backgroundColor:"#D2B48C"}}
          >
            Add Coffee
          </Button>
        </Form.Item>
      </Form>
    </div>
    </div>
    </>
  );
};

export default AddCoffie;

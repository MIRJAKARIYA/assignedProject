import React from "react";
import { Button, Checkbox, Col, Form, Input, Row,Typography } from "antd";
const {Paragraph,Title,Text} = Typography;
import "./AddCoffie.css"
import {AiOutlineArrowLeft} from "react-icons/ai"
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'


const AddCoffie = () => {
  const {name,details,category,chef,img,supplier,taste,_id} = useLoaderData() || {}

  const navigate = useNavigate()
  const location = useLocation()


  const addYourCoffee = (values) => {
    const {name,details,category,chef,img,supplier,taste} = values;
    const coffeeData = {
        name,details,category,chef,img,supplier,taste
    }
    location.pathname === "/addCoffee"?
    fetch(`http://localhost:5000/coffee`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(coffeeData),
            })
                .then((res) => res.json())
                .then((data) => {
                  Swal.fire({
                    title: "Yahhh!!!",
                        text: "Coffee added successfully",
                        icon: "success",
                  })
                })
                 :

                 fetch(`http://localhost:5000/coffee/${_id}`, {
                  method: "PUT",
                  headers: {
                      "Content-Type": "application/json",
                  },
                  body: JSON.stringify(coffeeData),
              })
                  .then((res) => res.json())
                  .then((data) => {
                    Swal.fire({
                      title: "Yahhh!!!",
                        text: "Coffee updated successfully",
                        icon: "success",
                    })
                  })

  };
  return (

    <>
    <div className="coffie-container-wrapper">
    <Button className='back-to-home-button' onClick={()=>navigate("/")}>
                <AiOutlineArrowLeft style={{color:"black"}}/>
                <Text style={{fontSize:"30px",fontFamily:"var(--rancho)",marginLeft:"5px"}}>back to home</Text>
                </Button>
        <div className="add-coffee-container">
        <Title style={{fontFamily:"var(--rancho)",textAlign:"center",marginTop:"30px"}}> {
          location.pathname === "/addCoffee"?"Add New Coffee":"Update Existing Coffee Details"
        }</Title>
        <Paragraph style={{textAlign:"center",width:"80%",margin:"0 auto",marginBottom:"20px"}}>
          {
            location.pathname === "/addCoffee"?"It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.":"It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here."
          }
          </Paragraph>
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
              <Input placeholder={name?name:"Enter coffee name"} style={{height:"48px"}} />
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
              <Input placeholder={supplier?supplier:"Enter coffee supplier"} style={{height:"48px"}}/>
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
              <Input placeholder={category?category:"Enter coffee category"} style={{height:"48px"}}/>
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
              <Input placeholder={chef?chef:"Enter coffee chef"} style={{height:"48px"}}/>
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
              <Input placeholder={taste?taste:"Enter coffee taste"} style={{height:"48px"}}/>
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
              <Input placeholder={details?details:"Enter coffee details"} style={{height:"48px"}}/>
            </Form.Item>

          </Col>
        </Row>
        <span style={{fontWeight:"bold",fontFamily:"var(--railway)"}}>Photo</span>
        <Form.Item
              name="img"
              rules={[
                {
                  required: true,
                  message: "Please input photo!",
                },
              ]}
            >
              <Input placeholder={img?img:"Enter coffee photo"} style={{height:"48px"}}/>
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

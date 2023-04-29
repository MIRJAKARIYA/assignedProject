import React from 'react';
import React from "react";
import { Button, Checkbox, Col, Form, Input, Row,Typography } from "antd";
const {Paragraph} = Typography;

const UpdateCoffie = () => {
    const onFinish = (values) => {};
  const addYourCoffee = (values) => {
    console.log("Received values of form: ", values);
  };
    return (
        <div className="add-coffee-container">
        
      <Form name="normal_login" className="login-form" onFinish={addYourCoffee}>
        <Row gutter={[30]}>
          <Col md={12}>
            <span>Name</span>
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
            <span>Supplier</span>
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
            <span>Category</span>
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
              <span>Chef</span>
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
            <span>Taste</span>
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
            <span>Details</span>
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
        <span>Photo</span>
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
    );
};

export default UpdateCoffie;
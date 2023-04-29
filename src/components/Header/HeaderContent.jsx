import React from "react";
import "./HeaderContent.css";
import logo1 from "../../assets/logo1.png";
import { Layout } from "antd";
const { Header } = Layout;
const HeaderContent = () => {
  return (

      <Header className="header">
        <img src={logo1} alt="" />
        <p className="paragraph-style">Espresso Emporium</p>
      </Header>

  );
};

export default HeaderContent;

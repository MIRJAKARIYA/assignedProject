import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderContent from '../components/Header/HeaderContent';
import { Layout } from 'antd';
import FooterContent from '../components/Footer/FooterContent';



const Main = () => {
    return (
        <Layout>
            <HeaderContent></HeaderContent>
            <Outlet></Outlet>
            <FooterContent></FooterContent>
        </Layout>
    );
};

export default Main;
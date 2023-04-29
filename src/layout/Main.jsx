import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderContent from '../components/Header/HeaderContent';
import { Layout } from 'antd';


const Main = () => {
    return (
        <Layout>
            <HeaderContent></HeaderContent>
            <Outlet></Outlet>
        </Layout>
    );
};

export default Main;
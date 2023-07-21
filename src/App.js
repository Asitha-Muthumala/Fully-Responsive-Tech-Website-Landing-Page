import React from 'react';
import './App.css';

import AppHeader from './components/common/header';
import AppHome from './view/home';
import AppFooter from './components/common/footer';

import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className='mainLayout'>
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <AppHome />
      </Content>
      <Footer>
        <AppFooter />
      </Footer>
    </Layout>
  );
}

export default App;

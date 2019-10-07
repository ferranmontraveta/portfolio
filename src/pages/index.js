import React from "react"
import Layout from '../components/Layout';
import Projects from '../sections/projects'
import Home from '../sections/home'
import About from '../sections/about'
import Header from '../components/Header';

const IndexPage = () => (
    <Layout class="pagelayout">
        <Header />
        <Home />
        <Projects />
    </Layout>
);
  
export default IndexPage;
import React from "react"
import Layout from '../components/Layout';
import Projects from '../sections/projects'
import Home from '../sections/home'
import About from '../sections/about'
import Header from '../components/Header';
import Footer from '../components/Footer';

const IndexPage = () => (
    <Layout class="pagelayout">
        <Header />
        <Home />
        <About />
        <Projects />
        <Footer />
    </Layout>
);
  
export default IndexPage;
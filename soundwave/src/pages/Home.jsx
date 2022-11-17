import React from 'react';
import '../Styles/App.css';

import Header from '../components/Header/Header';
import HomeOrg from '../components/HomeOrg/HomeOrg';
import Footer from '../components/Footer/Footer';


const Home = () => {
  return (
    <>
    <Header />
    <HomeOrg/>
     <Footer/>
    </>
 
  )
};

export default Home;
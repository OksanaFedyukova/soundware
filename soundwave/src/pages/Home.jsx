import React from 'react';
import '../Styles/App.css';
import Image from '../images/landing-page-girl.png';
import Header from '../components/Header';
import Footer from '../components/Footer';


const Home = () => {
  return (
    <>
    <Header />
         <main>
          <div>
          <img src={Image} /* width='40' */ alt="girl" />
          </div>
          <div>
            <h2>Feel The Music</h2>
            <p>Stream over 20 mil songs with one click</p>
            <button>Join Now</button>
          </div>
         </main>
     <Footer/>
    </>
 
  )
};

export default Home;
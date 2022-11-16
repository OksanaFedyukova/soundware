import React from 'react';
import '../Home/Home.css';
import Image from '../../images/landing-page-girl.png';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';


const Home = () => {
  return (
    <>
    <Header />
         <div>
          <div>
          <img src={Image} /* width='40' */ alt="girl" />
          </div>
          <div>
            <h2>Feel The Music</h2>
            <p>Stream over 20 mil songs with one click</p>
            <button>Join Now</button>
          </div>
         </div>
     <Footer/>
    </>
 
  )
};

export default Home;
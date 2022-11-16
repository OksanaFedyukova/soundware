import React from 'react';
import '../Styles/App.css';
import Image from '../images/covers.jpg';
import Header from '../components/Header';
import Footer from '../components/Footer';


const Discover = () => {
  return ( <>
     <Header />
         <main>
          <div>
            <h2>Feel The Music</h2>
            <button>Charts</button>
            <button>Albums</button>
            <button>More</button>
            <p>By joining you can benefit by listening to the latest albums released.</p>
          </div>
          <div>
          <img src={Image} /* width='40' */ alt="covers" />
          </div>
         </main>
    <Footer />
 </>
  )
};

export default Discover;
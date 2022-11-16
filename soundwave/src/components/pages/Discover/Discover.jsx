import React from 'react';
import '../Discover/Discover.css';
import Image from '../../images/covers.jpg';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';


const Discover = () => {
  return ( <>
     <Header />
         <div>
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
         </div>
    <Footer />
 </>
  )
};

export default Discover;
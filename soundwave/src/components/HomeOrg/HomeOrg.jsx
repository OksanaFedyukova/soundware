import React from 'react';
import Image from '../../images/landing-page-girl.png';
import './home.scss';

const HomeOrg = () => {
  return (
  
    <div className='container-fluid'>
          <div className='row'>
          <div className='col-sm-2'>
            <div className='circle1'></div>
          </div>
            <div className='col-sm-4'>
              <picture>
                <source media = 'min-width: 900px'/>
              <img className='imgGirl' src={Image} /* width='40' */ alt="girl" /></picture>
           </div>
            <div className='col-sm-6'>
            <div className='circle2'></div>
             <div className='textHome'> 
        <h1 >Feel The Music</h1>
      <p>Stream over 20 mil songs with one click</p>
      <button className='btn btnJoin'>Join Now</button>
      </div>
      </div>
     </div>
    </div>
  
    
  );
};

export default HomeOrg;
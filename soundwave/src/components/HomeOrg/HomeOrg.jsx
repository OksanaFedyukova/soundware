import React from 'react';
import Image from '../../images/landing-page-girl.png';
import './home.scss';

const HomeOrg = () => {
  return (
    <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
    <img className='imgGirl' src={Image} /* width='40' */ alt="girl" />
    </div>
    <div className='col-md-6'>
      <div className='textHome'> 
        <h2 >Feel The Music</h2>
      <p>Stream over 20 mil songs with one click</p>
      <button className='btn btnJoin'>Join Now</button>
      </div>
     
    </div>
    </div>
    </div>
  );
};

export default HomeOrg;
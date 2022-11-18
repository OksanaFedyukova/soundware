import React from 'react';
import './discover.scss'
import Micro from '../../images/microphone.svg';
import Albums from '../../images/albums.svg';
import More from '../../images/more.svg';
import Image from '../../images/covers.jpg';


const DiscoverOrg = () => {
  return (
    <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
            <div className='textHome'>
    <h2>Discover New Music</h2>
    <button className='btnDisvover'>  <img src={Micro} width='20' alt="micro" /> Charts</button>
    <button className='btnDisvover'>   <img src={Albums} width='20' alt="more" />Albums</button>
    <button className='btnDisvover'>   <img src={More} width='20' alt="more" />More</button>
    <p>By joining you can benefit by listening to the latest albums released.</p>
    </div>
  </div>
  <div className='col-md-6'>
  <img className='imgCollage' src={Image} /* width='40' */ alt="covers" />
  </div>
  </div>
  </div>
  );
}

export default DiscoverOrg;
import React from 'react';
import './header.scss';
import Logo from '../../images/logo.png';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <nav>  
         <div className='navbar'>
          <ul>
            <a href="/">
              <li><img src={Logo} width='40' alt="logo" /></li>  
              <li><span>Sounwave</span></li>
            </a>
            </ul>
            <ul>
                <li>
                    <Link to ="/discover">Discover</Link>
                </li>
                <li>
                <Link to ="/join">Join</Link>
                </li>
            </ul>
         </div>
    </nav>
 
  )
};

export default Header;
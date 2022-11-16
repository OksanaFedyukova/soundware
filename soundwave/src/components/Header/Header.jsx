import React from 'react';
import '../../Styles/App.css';
import Logo from '../../images/logo.png';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <nav>  
         <div>
            <a href="/">
                <img src={Logo} width='40' alt="logo" />
                <span>Sounwave</span>
            </a>
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
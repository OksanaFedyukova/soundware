import React from 'react';
import '../Header/Header.css';
import Logo from '../../images/logo.png';


const Header = () => {
  return (
    <nav>  
         <div>
            <a href="#">
                <img src={Logo} width='40' alt="logo" />
                <span>Sounwave</span>
            </a>
            <ul>
                <li>
                    <a href="#">Discover</a>
                </li>
                <li>
                <a href="#">Join</a>
                </li>
            </ul>
         </div>
    </nav>
 
  )
};

export default Header;
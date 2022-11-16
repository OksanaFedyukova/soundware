import React from 'react';
import '../Join/Join.css';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';



const Join = () => {
  return (
    <>
    <Header />
        <div>
          <div>
            <h1>Join the <span>fun</span></h1>
          </div>
        <div>
          <form>
              <label> Name: <input type="text" name="name" />
             </label>
             <br />
             <label> Email: <input type="text" name="email" />
             </label>
             <br/>
             <label> Password: <input type="text" name="password" />
             </label>
              <br/>
             <button type="submit">Submit</button>     
           </form>
          </div>
         </div>
         <Footer/>
         </>
  )
};

export default Join;
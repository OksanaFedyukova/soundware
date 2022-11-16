import React from 'react';
import '../Styles/App.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';



const Join = () => {
  return (
    <>
    <Header />
        <main>
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
         </main>
         <Footer/>
         </>
  )
};

export default Join;
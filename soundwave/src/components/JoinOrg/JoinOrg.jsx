import React from 'react';
import './join.scss';

const JoinOrg = () => {
  return (
    <main>
    <div>
    <h1>Join the <span className='fun'>fun.</span></h1>
  </div>
  <div>
  <div id="registration-form">
  <div class='fieldset'>
    <form>
      <div class='row'>
        <label for='firstname'>Name</label>
        <input type="text" name='firstname' id='firstname'/>
      </div>
      <div class='row'>
        <label for="email">E-mail</label>
        <input type="text"  name='email' />
      </div>
      <div class='row'>
        <label for="cemail">Password</label>
        <input type="text"  name='rassword' />
      </div>
      {/* <input type="submit" value="Submit"/> */}
      <button className='btn btnSubmit'>Submit</button>
    </form>
  </div>
</div>
  {/* <form>
      <label> Name: <input type="text" name="name" />
     </label>
     <br />
     <label> Email: <input type="text" name="email" />
     </label>
     <br/>
     <label> Password: <input type="text" name="password" />
     </label>
      <br/>
     <button type="submit" className='btn btnSubmit' >Submit</button>     
   </form> */}
  </div>
  </main>
  );
}

export default JoinOrg;
/* import './Styles/App.css'; */

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from  './pages/Home';
import  Discover from './pages/Discover';
import Join from './pages/Join';

function App() {
  return (
    <div className="App">
       <Router>
         <Routes>
           <Route path="/" index exact  element={<Home/>}/>
           <Route  path="/discover" exact element={<Discover/>}/>
           <Route path="/join"  exact element={<Join/>}/>
         </Routes>
      </Router>

    </div>
  );
}

export default App;

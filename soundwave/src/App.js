import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from  '../src/components/pages/Home/Home';
import  Discover from '../src/components/pages/Discover/Discover';
import Join from '../src/components/pages/Join/Join';

function App() {
  return (
    <div className="App">
      <Router>
         <Routes>
           <Route path="/" element={<Home/>}/>
           <Route exact path="/" element={<Discover/>}/>
           <Route exact path="/" element={<Join/>}/>
         </Routes>
      </Router>

    </div>
  );
}

export default App;

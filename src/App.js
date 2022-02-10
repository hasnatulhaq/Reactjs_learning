import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Slice/Home';
import Login from './Slice/Login';
import Sigin from './Slice/Sigin';
import About from './Slice/About';


function App() {
  return (
    <Router>
      <Routes>
          <Route path='/Home' element={<Home/>}></Route>
          <Route path='/About' element={<About/>}></Route>
          <Route path='/Login' element={<Login/>}></Route>
          <Route path='/Signin' element={<Sigin/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;

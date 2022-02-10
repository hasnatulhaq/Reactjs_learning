import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <a href='/home'>Go to home page</a>
      <Routes>
          <Route path='/'></Route>
      </Routes>
    </Router>
  );
}

export default App;

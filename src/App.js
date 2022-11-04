import { HashRouter, Route, Routes } from 'react-router-dom';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import '../src/pages/home/home.css'

function App() {
  return (
    <HashRouter>
    <div className="App">
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/contact' element= {<Contact />} />
      </Routes>

      <footer>
        <div className="zuriImg"></div>
        <h3>HNG Internship 9 Frontend Task</h3>
        <div className="igfImg"></div>
      </footer>
    </div>
    </HashRouter>
  );
}

export default App;

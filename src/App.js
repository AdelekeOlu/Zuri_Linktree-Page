import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import '../src/pages/home/home.css'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/Zuri_Linktree-Page/' element= {<Home />} />
        <Route path='/contact' element= {<Contact />} />
      </Routes>

      <footer>
        <div className="zuriImg"></div>
        <h3>HNG Internship 9 Frontend Task</h3>
        <div className="igfImg"></div>
      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
